import express from 'express';

const app = express();

const list = ['秦齐', '师悦', '张艺儒', '张莎', '张培', '崔倩', '魏航', '韩亦乐', '同旸', '杜金桥', '张颖嘉', '张磊', '尹萌', '王根旺', '鱼娟', '祁燕子', '王婷', '陈崇发', '任丹丹', '段雪', '符聪聪', '赵思远', '王盼', '刘茹', '刘幸', '胡雄超', '马宇辰', '赵琪琪', '王齐'];

const getRandomName = ()=> {
  let idx = parseInt(Math.random() * (list.length));
  return list[idx];
};

app.use(express.static('public'));

app.get('/todos', (req, res)=> {
  setTimeout(()=> {
    res.send([{
      text: getRandomName(),
      completed: false
    }, {
      text: getRandomName(),
      completed: true
    }])
  }, 1000);
});

app.listen(3000, ()=> {
  console.log('Server start at http://localhost:3000');
});