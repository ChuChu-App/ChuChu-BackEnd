import express, { Request, Response } from 'express';
const chatRouter = express.Router();

// μΆμ² routes

/* GET home page. */
chatRouter.get('/', function (req: Request, res: Response) {
  res.send('Chat πβ¨');
});

export default chatRouter;
