export interface User {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  password: string;
  repeatPassword: string;
  userPosts: object[];
}
