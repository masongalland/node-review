const users = require("./users.json");

module.exports = {
  getUsersByQuery: (req, res) => {
    let { make, letter, year } = req.query;
    if (make) {
      let filtered = users.filter(e => {
        return e.make === make;
      });
      res.status(200).send(filtered);
    } 
    else if (letter) {
      let filtered = users.filter(e => {
        return e.first_name.startsWith(letter);
      });
      res.status(200).send(filtered);
    } 
    else if (year) {
      let filtered = users.filter(e => {
        return e.year > year;
      });
      res.status(200).send(filtered);
    } 
    else {
      res.status(200).json("Invalid query");
    }
  }
};
