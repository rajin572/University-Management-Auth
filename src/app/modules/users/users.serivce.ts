import config from '../../../config';
import { genarateUserID } from './user.utilties';
import { IUser } from './users.interfece';
import { User } from './usres.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  //Auto genarated ID
  const id = await genarateUserID();
  user.id = id;

  // default password
  if (!user.password) {
    user.password = config.default_user_password as string;
  }

  //Create User
  const createUser = User.create(user);

  //if the userData give us a error then it will throw a error
  if (!createUser) {
    throw new Error('Failed to create user');
  }
  return createUser;
};

export const UserService = {
  createUser,
};
