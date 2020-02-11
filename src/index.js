const { createUser, deleteUser, getUser, updateUser } = require  ('./controllers/user.js');

const express = require('express');

const PORT = process.env.NODE_ENV || 3000;

const app = express();

app.use(express.json());
app.post('/user', createUser);
app.get('/:id', getUser);
app.patch('/:id', updateUser);
app.delete('/:id', deleteUser);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
