import React, { PropTypes } from "react";
import ReactDOM from "react-dom";
import List from "./component/List/List.jsx"

const comicList = [
    {title:  "Barrel - Part 1", image: "https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg"},
    {title:  "Barrel - Part 1", image: "https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg"},
    {title:  "Barrel - Part 1", image: "https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg"},
    {title:  "Barrel - Part 1", image: "https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg"},
    {title:  "Barrel - Part 1", image: "https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg"},
    {title:  "Barrel - Part 1", image: "https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg"},
]

class App extends React.Component {
    render() {
        return (
            <div>
                <List data={comicList}/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("app"));