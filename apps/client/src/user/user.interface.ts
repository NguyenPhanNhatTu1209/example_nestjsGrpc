import { Observable } from 'rxjs';

export interface id {
  id: string;
}
export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  role: string;
}
export interface createUserDto {
  name: string;
  phone: string;
  email: string;
  address: string;
}
export interface UsersService {
  createUser(body: createUserDto): Observable<User>;
}
