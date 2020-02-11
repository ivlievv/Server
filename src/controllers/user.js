const {User} = require ('../models');

 const createUser = async (req, res, next) => {
  const createdUser = await User.create(req.body);
  res.send(createdUser);
};

 const getUser = async (req, res, next) => {

  const user = await User.findByPk(req.params.id);
  res.send(user);
};

 const updateUser = async (req, res, next) => {
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
};

 const deleteUser = async (req, res, next) => {
  const deleteRowsCount = await User.destroy({
                                               where: {
                                                 id: req.params.id
                                               }
                                             });
  if (deleteRowsCount){
    return res.send('User has been delete.');
  }
  res.status(404).send('Error 404. User not found.');
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser
};