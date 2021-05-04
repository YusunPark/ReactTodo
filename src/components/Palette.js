import React, { Component } from "react";
import "./Palette.css";

class Palette extends Component {

  render() {

    const { colors } = this.props;
    console.log(colors);
    return (
      <div className="color_layer">
        <div className="colors">
          <div className="color">
            <div className="color_box grey selected"></div>
            <div className="color_box red selected"></div>
            <div className="color_box green"></div>
            <div className="color_box blue"></div>
          </div>
        </div>
      </div>

      // <div className="color_box"></div>
    );

  }

}
export default Palette;