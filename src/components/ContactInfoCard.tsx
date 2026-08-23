import { StyleSheet, Text, View } from 'react-native';
import { colors, typography, spacing, radii } from '../theme';
import type { ExpertiseContact } from '../constants/contactInfo';

type ContactInfoCardProps = { contact: ExpertiseContact };

export function ContactInfoCard({ contact }: ContactInfoCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.domain}>{contact.domain}</Text>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>Responsable</Text>
        <Text style={styles.rowValue}>{contact.responsable}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>Téléphone</Text>
        <Text style={styles.rowValue}>{contact.telephone}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>Email</Text>
        <Text style={styles.rowValue}>{contact.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    flexBasis: 240,
    maxWidth: 320,
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    padding: spacing.lg,
  },
  domain: { ...typography.h3, color: colors.primary, marginBottom: spacing.md },
  row: { marginBottom: spacing.sm },
  rowLabel: { ...typography.label, color: colors.primaryLight },
  rowValue: { ...typography.body, color: colors.textPrimary },
});
