import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography, spacing, radii } from '../theme';
import { domainOptions, type DomainOption } from '../constants/contactForm';

type DomainSelectorProps = {
  value: DomainOption | '';
  onChange: (value: DomainOption) => void;
  error?: string;
};

/** Sélecteur du domaine d'expertise sous forme de puces (fonctionne pareil web/tactile). */
export function DomainSelector({ value, onChange, error }: DomainSelectorProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>
        Domaine d'expertise<Text style={styles.required}> *</Text>
      </Text>
      <View style={styles.row}>
        {domainOptions.map((option) => {
          const selected = value === option;
          return (
            <Pressable key={option} onPress={() => onChange(option)} style={[styles.chip, selected && styles.chipSelected]}>
              <Text style={[styles.chipText, selected && styles.chipTextSelected]}>{option}</Text>
            </Pressable>
          );
        })}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: spacing.lg },
  label: { ...typography.bodyMedium, color: colors.primary, marginBottom: spacing.sm },
  required: { color: colors.error },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.pill,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.white,
  },
  chipSelected: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { ...typography.bodyMedium, color: colors.textPrimary },
  chipTextSelected: { color: colors.white },
  errorText: { ...typography.caption, color: colors.error, marginTop: spacing.xs },
});
