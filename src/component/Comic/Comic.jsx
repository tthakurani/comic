import React, { PropTypes } from "react";
import "./Comic.less";

class Comic extends React.Component {
    render() {
      const {title, image} = this.props;
        return (
          <div className="Comic">
            <h4>{title}</h4>
            <img src={image} style={{width: "100%", height: "100%"}}/>
          </div>
        );
    }
}

export default Comic;