import express, { Request, Response } from 'express';
const recRouter = express.Router();

// 추천 routes

/* GET home page. */
recRouter.get('/', function (req: Request, res: Response) {
  res.send('✨✨recommendation✨✨');
});

/* GET home page. */
recRouter.get('/breakfast', function (req: Request, res: Response) {
  res.send('✨✨breakfast✨✨');
});

/* GET home page. */
recRouter.get('/dessert', function (req: Request, res: Response) {
  res.send('✨✨dessert✨✨');
});

/* GET home page. */
recRouter.get('/dinner', function (req: Request, res: Response) {
  res.send('✨✨dinner✨✨');
});

/* GET home page. */
recRouter.get('/lunch', function (req: Request, res: Response) {
  res.send('✨✨lunch✨✨');
});

/* GET home page. */
recRouter.get('/snack', function (req: Request, res: Response) {
  res.send('✨✨snack✨✨');
});

export default recRouter;
