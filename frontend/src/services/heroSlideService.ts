import { apiClient } from './api';
import type { HeroSlide } from '../types';

export const getHeroSlides = async (): Promise<HeroSlide[]> => {
  const { data } = await apiClient.get<HeroSlide[]>('/api/hero-slides');
  return data;
};

export const createHeroSlide = async (
  payload: { imageFile: File; order?: number }
): Promise<HeroSlide> => {
  const form = new FormData();
  form.append('image', payload.imageFile);
  if (payload.order !== undefined) form.append('order', String(payload.order));

  const { data } = await apiClient.post<HeroSlide>('/api/hero-slides', form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

export const updateHeroSlide = async (
  id: string,
  payload: { imageFile?: File; order?: number }
): Promise<HeroSlide> => {
  const form = new FormData();
  if (payload.imageFile) form.append('image', payload.imageFile);
  if (payload.order !== undefined) form.append('order', String(payload.order));

  const { data } = await apiClient.put<HeroSlide>(`/api/hero-slides/${id}`, form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

export const deleteHeroSlide = async (id: string): Promise<void> => {
  await apiClient.delete(`/api/hero-slides/${id}`);
};
