import { User } from '../src/user/user.schema';

export interface queryfindByID {
  id: string;
}
export interface createUser {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export interface IService {
  createUser(param: createUser): Promise<User>;
}
