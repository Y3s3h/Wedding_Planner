export interface User {
  _id: string;

  name: string;

  email: string;

  phone: string;

  avatar?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}