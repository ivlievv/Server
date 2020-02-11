const db = require('./models');

const express = require('express');

const  PORT = process.env.NODE_ENV || 3000;

const  app = express();

app.use(express.json());
app.post('/user', async (reg, res, next) =>{
  const createdUser = await User.create(reg.body);
  res.send(createdUser);
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

const path = require('path');

const commonPath = 'src';

module.exports = {
  'config': path.resolve(commonPath, 'config', 'config.json'),
  'model-path': path.resolve(commonPath, 'models'),
  'seeders-path': path.resolve(commonPath, 'seeders'),
  'migrations-path': path.resolve(commonPath, 'migrations')
};
