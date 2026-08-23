import { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography, spacing, radii } from '../theme';
import {
  ACCEPTED_FILE_TYPES,
  ACCEPTED_FILE_TYPES_LABEL,
  MAX_FILE_SIZE_BYTES,
  MAX_FILE_SIZE_MB,
} from '../constants/contactForm';
import type { ContactAttachment } from '../types/contact';

type FileUploaderProps = {
  files: ContactAttachment[];
  onChange: (files: ContactAttachment[]) => void;
};

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
}

/**
 * Upload de plusieurs fichiers (PDF, DOCX, XLSX, ZIP, Images), avec
 * affichage de la liste sélectionnée et suppression avant envoi. La limite
 * de taille est centralisée dans constants/contactForm.ts.
 */
export function FileUploader({ files, onChange }: FileUploaderProps) {
  const [warning, setWarning] = useState<string | null>(null);

  const handlePick = async () => {
    setWarning(null);
    const result = await DocumentPicker.getDocumentAsync({
      type: ACCEPTED_FILE_TYPES,
      multiple: true,
      copyToCacheDirectory: true,
    });

    if (result.canceled || !result.assets) return;

    const accepted: ContactAttachment[] = [];
    let rejectedCount = 0;

    for (const asset of result.assets) {
      if (asset.size && asset.size > MAX_FILE_SIZE_BYTES) {
        rejectedCount += 1;
        continue;
      }
      accepted.push({
        id: `${asset.name}-${asset.size ?? 0}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: asset.name,
        size: asset.size ?? 0,
        mimeType: asset.mimeType,
        uri: asset.uri,
        file: asset.file,
      });
    }

    if (rejectedCount > 0) {
      setWarning(`${rejectedCount} fichier(s) dépassent ${MAX_FILE_SIZE_MB} Mo et n'ont pas été ajoutés.`);
    }

    onChange([...files, ...accepted]);
  };

  const handleRemove = (id: string) => {
    onChange(files.filter((f) => f.id !== id));
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Pièces jointes</Text>
      <Text style={styles.hint}>
        {ACCEPTED_FILE_TYPES_LABEL} — {MAX_FILE_SIZE_MB} Mo max par fichier
      </Text>

      <Pressable onPress={handlePick} style={styles.pickButton} accessibilityRole="button">
        <Text style={styles.pickButtonText}>+ Ajouter des fichiers</Text>
      </Pressable>

      {warning ? <Text style={styles.warning}>{warning}</Text> : null}

      {files.length > 0 && (
        <View style={styles.fileList}>
          {files.map((file) => (
            <View key={file.id} style={styles.fileRow}>
              <View style={styles.fileInfo}>
                <Text style={styles.fileName} numberOfLines={1}>
                  {file.name}
                </Text>
                <Text style={styles.fileSize}>{formatFileSize(file.size)}</Text>
              </View>
              <Pressable
                onPress={() => handleRemove(file.id)}
                accessibilityRole="button"
                accessibilityLabel={`Supprimer ${file.name}`}
              >
                <Text style={styles.removeButton}>✕</Text>
              </Pressable>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: spacing.lg },
  label: { ...typography.bodyMedium, color: colors.primary, marginBottom: spacing.xs },
  hint: { ...typography.caption, color: colors.textSecondary, marginBottom: spacing.sm },
  pickButton: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: colors.primaryLight,
    borderRadius: radii.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  pickButtonText: { ...typography.bodyMedium, color: colors.primaryLight },
  warning: { ...typography.caption, color: colors.error, marginTop: spacing.sm },
  fileList: { marginTop: spacing.md, gap: spacing.xs },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radii.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  fileInfo: { flexDirection: 'row', flex: 1, marginRight: spacing.sm, gap: spacing.sm },
  fileName: { ...typography.body, color: colors.textPrimary, flexShrink: 1 },
  fileSize: { ...typography.caption, color: colors.textSecondary },
  removeButton: { ...typography.bodyMedium, color: colors.error, paddingHorizontal: spacing.xs },
});
