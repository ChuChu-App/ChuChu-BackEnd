import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome!');
});


app.listen('8000', () => {
  console.log(`
  ################################################
  🎉 Server listening on port: 8000 
  🎉 http://localhost:8000
  ################################################
`);
});
