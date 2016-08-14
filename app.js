import express from 'express';

const app = express();

app.get('/todos', (req, res)=> {
  setTimeout(()=> {
    res.send([{
      text: 'first',
      completed: false
    }, {
      text: 'second',
      completed: false
    }])
  }, 1000);
});

app.listen(3000, ()=> {
  console.log('Server start at http://localhost:3000');
});