var log4js = require("log4js");
const User = require("../models/User");

class PublicContoller {

  async index(req, res) {

    return res.send('Hello world')

  }

  async helloworld(req, res) {
    let logger = log4js.getLogger();
    logger.level = "debug";
    logger.debug("Hello World");

    return res.send(req.body.string)
  }

  async user(req, res) {
    let users;
    users = await User.get();
    return users ? res.send(users) : res.send("No user found")
  }

}

module.exports = PublicContoller
