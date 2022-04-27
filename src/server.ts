import app from './app';
const PORT = 8000;

// listen to port
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`
      ################################################
      🎉 Server listening on port: ${PORT} 
      🎉 http://localhost:${PORT}
      ################################################
    `);
  });
}
