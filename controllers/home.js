module.exports = {
  getIndex: (req, res) => {
    res.render("index", { name: 'Dan' });
  },
};
