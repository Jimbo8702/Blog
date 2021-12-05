const { User } = require("../models");

const userData = [
  {
    username: "James Sgarella",
    email: "James@email.com",
    password: "moomoo",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
