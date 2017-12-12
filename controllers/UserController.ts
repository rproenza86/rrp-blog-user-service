import User from '../models/User';

// get user by id
export function getUserById(req, res, next) {
  const id = req.params.id;

  User.findById(id)
  .then((user) => {
    res.status(200).json({ user });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}


export function createUser(req, res, next) {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const user = new User({
    name,
    username,
    email,
    password
  });

  user.save()
  .then((user) => {
    res.status(201).json({ user });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}


// update user by id
export function updateUser(req, res, next) {
  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body)
  .then((user) => {
    res.status(200).json({ user });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}


// delete user by id
export function deleteUser(req, res, next) {
  const id = req.params.id;

  User.findByIdAndRemove(id)
  .then((user) => {
    res.status(204).json({ user });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}

//For the docker container status
export function livenessProbe(req, res, next) {
  res.status(200).json({ server_status: "alive now2" });
}

export function readinessProbe(req, res, next) {
  res.status(200).json({ server_status: "Ready now YEEEAAAAH" });
}