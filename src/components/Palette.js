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
            <div className="color_box">bbbb</div>
            <div className="color_box">aaaa</div>
            <div className="color_box">aaaa</div>
            <div className="color_box">aaaa</div>
          </div>
        </div>
      </div>

      // <div className="color_box"></div>
    );

  }

}
export default Palette;