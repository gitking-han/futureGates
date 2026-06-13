import { apiClient } from './api';
import type { StudentActivityAd } from '../types';

export const getStudentActivityAds = async (): Promise<StudentActivityAd[]> => {
  const { data } = await apiClient.get<StudentActivityAd[]>('/api/student-activity-ads');
  return data;
};

export const createStudentActivityAd = async (
  payload: { description: string; imageFile?: File }
): Promise<StudentActivityAd> => {
  const form = new FormData();
  form.append('description', payload.description);
  if (payload.imageFile) form.append('image', payload.imageFile);

  const { data } = await apiClient.post<StudentActivityAd>('/api/student-activity-ads', form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

export const updateStudentActivityAd = async (
  id: string,
  payload: { description?: string; imageFile?: File }
): Promise<StudentActivityAd> => {
  const form = new FormData();
  if (payload.description) form.append('description', payload.description);
  if (payload.imageFile) form.append('image', payload.imageFile);

  const { data } = await apiClient.put<StudentActivityAd>(`/api/student-activity-ads/${id}`, form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

export const deleteStudentActivityAd = async (id: string): Promise<void> => {
  await apiClient.delete(`/api/student-activity-ads/${id}`);
};
