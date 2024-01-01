import express, { NextFunction, Response } from 'express';
import mongoose from 'mongoose';
import cardRouter from './routes/cards';
import { IUserRequest } from './types';
import userRouter from './routes/user';

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');
app.use('/users', userRouter);
app.use('/cards', cardRouter);

app.use((req: IUserRequest, _res: Response, next: NextFunction) => {
  req.user = {
    _id: '65913fe8e464045ead0a864a',
  };

  next();
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
