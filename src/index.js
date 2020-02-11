const { User } = require('./models');

const express = require('express');

const PORT = process.env.NODE_ENV || 3000;

const app = express();

app.use(express.json());
app.post('/user', async (req, res, next) => {
  const createdUser = await User.create(req.body);
  res.send(createdUser);
});
app.get('/:id', async (req, res, next) => {

  const user = await User.findByPk(req.params.id);
  res.send(user);
});

app.patch('/:id', async (req, res, next) => {
  const [updatedRowsCount, rows] = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  });
  if (updatedRowsCount) {
    return res.send(rows[0]);
  }
  res.status(404).send('Error 404. User not found.');
});

app.delete('/:id', async (req, res, next) => {
  const deleteRowsCount = await User.destroy({
                                               where: {
                                                 id: req.params.id
                                               }
                                             });
    if (deleteRowsCount){
      return res.send('User has been delete.');
    }
    res.status(404).send('Error 404. User not found.');
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
