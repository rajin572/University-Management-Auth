import { Request, Response } from 'express';
import { UserService } from './users.serivce';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  } catch {
    res.status(400).json({
      massage: 'Failed To create User',
    });
  }
};

export const UserController = {
  createUser,
};
