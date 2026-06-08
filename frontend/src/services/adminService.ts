import { apiClient } from './api';

export interface AdminLoginResponse {
  token: string;
  email: string;
}

export const loginAdmin = async (email: string, password: string): Promise<AdminLoginResponse> => {
  const { data } = await apiClient.post<AdminLoginResponse>('/api/admin/login', {
    email,
    password,
  });
  return data;
};
