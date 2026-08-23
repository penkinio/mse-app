import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { PageHero } from '../components/PageHero';
import { ContactInfoCard } from '../components/ContactInfoCard';
import { FormField } from '../components/FormField';
import { DomainSelector } from '../components/DomainSelector';
import { FileUploader } from '../components/FileUploader';
import { CtaButton } from '../components/CtaButton';

import { expertiseContacts } from '../constants/contactInfo';
import type { DomainOption } from '../constants/contactForm';
import { validateContactForm, type ContactFormErrors } from '../utils/validateContactForm';
import { submitContactForm } from '../services/contactService';
import type { ContactFormData, ContactAttachment } from '../types/contact';
import { colors, typography, spacing } from '../theme';

const EMPTY_FORM: ContactFormData = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  domain: '',
  subject: '',
  message: '',
};

export function ContactScreen() {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [files, setFiles] = useState<ContactAttachment[]>([]);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const updateField = (field: keyof ContactFormData) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus('idle');
      return;
    }

    setStatus('submitting');
    const result = await submitContactForm(form, files);

    if (result.success) {
      setStatus('success');
      setStatusMessage('Votre message a bien été envoyé. Nous revenons vers vous rapidement.');
      setForm(EMPTY_FORM);
      setFiles([]);
      setErrors({});
    } else {
      setStatus('error');
      setStatusMessage(result.message);
    }
  };

  return (
    <ScrollView style={styles.root}>
      <PageHero
        eyebrow="PARLONS-EN"
        title="Contact"
        subtitle="Nos équipes vous répondent, ou écrivez-nous directement via le formulaire."
      />

      <View style={styles.infoSection}>
        <View style={styles.infoGrid}>
          {expertiseContacts.map((contact) => (
            <ContactInfoCard key={contact.domain} contact={contact} />
          ))}
        </View>
      </View>

      <View style={styles.formSection}>
        <Text style={styles.formTitle}>Décrivez votre besoin</Text>

        <FormField
          label="Nom complet"
          required
          value={form.fullName}
          onChangeText={updateField('fullName')}
          error={errors.fullName}
        />
        <FormField label="Entreprise" value={form.company} onChangeText={updateField('company')} />
        <FormField
          label="Email"
          required
          value={form.email}
          onChangeText={updateField('email')}
          error={errors.email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <FormField
          label="Téléphone"
          value={form.phone}
          onChangeText={updateField('phone')}
          keyboardType="phone-pad"
        />

        <DomainSelector
          value={form.domain as DomainOption | ''}
          onChange={(value) => setForm((prev) => ({ ...prev, domain: value }))}
          error={errors.domain}
        />

        <FormField label="Objet" required value={form.subject} onChangeText={updateField('subject')} error={errors.subject} />
        <FormField
          label="Description détaillée du besoin"
          required
          value={form.message}
          onChangeText={updateField('message')}
          error={errors.message}
          multiline
          numberOfLines={6}
          style={styles.textarea}
        />

        <FileUploader files={files} onChange={setFiles} />

        {status === 'error' && <Text style={styles.errorBanner}>{statusMessage}</Text>}
        {status === 'success' && <Text style={styles.successBanner}>{statusMessage}</Text>}

        <CtaButton
          label={status === 'submitting' ? 'Envoi en cours…' : 'Envoyer'}
          onPress={handleSubmit}
          disabled={status === 'submitting'}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.white },
  infoSection: { padding: spacing.xl, backgroundColor: colors.surface },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },
  formSection: { padding: spacing.xl, paddingBottom: spacing.xxxl, maxWidth: 640, width: '100%', alignSelf: 'center' },
  formTitle: { ...typography.h2, color: colors.primary, marginBottom: spacing.lg },
  textarea: { minHeight: 140, textAlignVertical: 'top' },
  errorBanner: { ...typography.body, color: colors.error, marginBottom: spacing.md },
  successBanner: { ...typography.body, color: colors.success, marginBottom: spacing.md },
});
