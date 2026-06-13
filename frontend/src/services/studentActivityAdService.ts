import { apiClient } from './api';
import type { StudentActivityAd } from '../types';

export const getStudentActivityAds = async (): Promise<StudentActivityAd[]> => {
  const { data } = await apiClient.get<StudentActivityAd[]>('/api/student-activity-ads');
  return data;
};

export const createStudentActivityAd = async (
  payload: Omit<StudentActivityAd, '_id'>
): Promise<StudentActivityAd> => {
  const { data } = await apiClient.post<StudentActivityAd>('/api/student-activity-ads', payload);
  return data;
};

export const updateStudentActivityAd = async (
  id: string,
  payload: Partial<Omit<StudentActivityAd, '_id'>>
): Promise<StudentActivityAd> => {
  const { data } = await apiClient.put<StudentActivityAd>(`/api/student-activity-ads/${id}`, payload);
  return data;
};

export const deleteStudentActivityAd = async (id: string): Promise<void> => {
  await apiClient.delete(`/api/student-activity-ads/${id}`);
};
