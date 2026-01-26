export interface UserType {
  id: string;
  token: string;
  name: string;
  email: string;
  avatar?: string;
  avatarFile?: File;
  created: string;
  themeMode: string;
  oldPassword?: string;
  password?: string;
  passwordConfirm?: string;
}
