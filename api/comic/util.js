const scrapeIt = require("scrape-it");
const util = require("util");
rxUrlLine = /Image URL.*https.*\.(png|gif|jpeg|jpg)/g;
rxUrl = /https.*\.(png|gif|jpeg|jpg)/g;

function fetchComic(id) {
    return scrapeIt(`https://xkcd.com/${id}/`, {
        title: "#ctitle",
        imageContent: "#middleContainer"
    }).then(({data}) => {
       return {
            title: data.title,
            image: (((data.imageContent.match(rxUrlLine) || [""])[0].match(rxUrl)) || [""])[0],
            id,
        };
    }).catch(e => {
        util.log("[ERR][fetchComic]: ", JSON.stringify(e));
        return {err: true, id: id };
    });
}

exports.fetchComics = function(from, to) {
    const requests = [];
    for(let idx=from; idx<=to; idx++) {
        requests.push(fetchComic(idx));
    }
    return Promise.all(requests);
}

