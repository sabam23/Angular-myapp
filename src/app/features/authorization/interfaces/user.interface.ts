export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
  userPosts: object[];
}
