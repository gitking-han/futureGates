import { apiClient } from './api';
import type { VerificationRecord } from '../types';

export const getVerificationByReference = async (reference: string): Promise<VerificationRecord> => {
  const { data } = await apiClient.get<VerificationRecord>(`/api/verifications/${encodeURIComponent(reference)}`);
  return data;
};

export const getVerifications = async (): Promise<VerificationRecord[]> => {
  const { data } = await apiClient.get<VerificationRecord[]>('/api/verifications');
  return data;
};

export const deleteVerification = async (id: string): Promise<void> => {
  await apiClient.delete(`/api/verifications/${id}`);
};

export const uploadVerificationExcel = async (file: File): Promise<void> => {
  const form = new FormData();
  form.append('file', file);
  await apiClient.post('/api/verifications/upload-excel', form, {
    headers: { 'Content-Type': 'multipart/form-data' },
    timeout: 60000,
  });
};

export const createVerification = async (payload: Partial<VerificationRecord>): Promise<VerificationRecord> => {
  const { data } = await apiClient.post<VerificationRecord>('/api/verifications', payload);
  return data;
};
