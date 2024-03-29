import { Router } from 'express';
import {
  getUserByIdValidation, updateAvatarValidation, updateUserValidation,
} from '../validation/validation';
import {
  getMyUser,
  getUserById, getUsers, updateAvatar, updateUser,
} from '../controllers/users';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/me', getMyUser);
userRouter.get('/:userId', getUserByIdValidation, getUserById);

userRouter.patch('/me', updateUserValidation, updateUser);
userRouter.patch('/me/avatar', updateAvatarValidation, updateAvatar);

export default userRouter;
