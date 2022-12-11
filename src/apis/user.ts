import axios from '@/utils/axios';
import { ApiResponse } from '@/utils/axios';

export interface User {
  id: number,
  username: string,
  password: string
}
export interface LoginData {
  username: string
  password: string
}

export function login(data: LoginData) {
  return axios.post('/user/login', data)
}

export type RegisterData = LoginData

export function registerUser(data: RegisterData) {
  return axios.post<any, ApiResponse<User>>('/user', data)
}