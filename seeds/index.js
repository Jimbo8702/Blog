const sequelize = require("../config/connection");
const seedUser = require("./Users.js");
const seedPosts = require("./posts.js");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPosts();

  process.exit(0);
};

seedAll();
