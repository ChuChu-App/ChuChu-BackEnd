import express, { Request, Response } from 'express';
const chatRouter = express.Router();

// 추천 routes

/* GET home page. */
chatRouter.get('/', function (req: Request, res: Response) {
  res.send('Chat 🎉✨');
});

export default chatRouter;
