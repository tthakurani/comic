const scrapeIt = require("scrape-it");
const { fetchComics } = require("./util");
const { PAGE_SIZE } = require("./constant");

exports.getComics = (req, res) => {
  let {page = 1} = req.query;
  page = (+page) - 1;
  if(isNaN(page)) {
    return res.status(400).send({message: invalidPage});
  }
  const from = (page*PAGE_SIZE + 1); 
  const to = from + PAGE_SIZE - 1;
  fetchComics(from, to)
    .then((data) => {
      res.send({ success: true, data });
    }).catch(e => {
      res.send({ success: false, err: e });
    });
}