import express, { Request, Response } from 'express';
import recRouter from './routes/recommendation';
import chatRouter from './routes/recommendation';

const app = express();

app.get('/welcome', (req: Request, res: Response) => {
  res.send('welcome!');
});

app.use('/recommendation', recRouter);
app.use('/chat', chatRouter);

export default app;
