import { apiClient } from './api';
import type { HeroSlide } from '../types';

export const getHeroSlides = async (): Promise<HeroSlide[]> => {
  const { data } = await apiClient.get<HeroSlide[]>('/api/hero-slides');
  return data;
};

export const createHeroSlide = async (
  payload: { imageUrl: string; order?: number }
): Promise<HeroSlide> => {
  const { data } = await apiClient.post<HeroSlide>('/api/hero-slides', {
    imageUrl: payload.imageUrl,
    order: payload.order ?? 0,
  });
  return data;
};

export const updateHeroSlide = async (
  id: string,
  payload: { imageUrl?: string; order?: number }
): Promise<HeroSlide> => {
  const { data } = await apiClient.put<HeroSlide>(`/api/hero-slides/${id}`, {
    ...(payload.imageUrl !== undefined ? { imageUrl: payload.imageUrl } : {}),
    ...(payload.order !== undefined ? { order: payload.order } : {}),
  });
  return data;
};

export const deleteHeroSlide = async (id: string): Promise<void> => {
  await apiClient.delete(`/api/hero-slides/${id}`);
};
