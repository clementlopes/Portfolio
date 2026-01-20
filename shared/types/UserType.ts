export interface UserType {
  id: string;
  token: string;
  name: string;
  email: string;
  avatar?: string;
  created: string;
  themeMode: string;
  oldPassword?: string;
  password?: string;
  passwordConfirm?: string;
}
