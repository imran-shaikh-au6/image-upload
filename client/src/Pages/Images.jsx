import React, { Component } from "react";
import "./Image.css";
class Images extends Component {
    render() {
        
        return (
            <div className="innerWrap">
                <center>
                    <img
                      
                        style={{
                            height: "15em",
                            width: "21em",
                            borderTopLeftRadius: "1em",

                            borderTopRightRadius: "1em",
                        }}
                        src={this.props.data}
                        className="card-img-top"
                        alt="..."
                    />{" "}
                </center>
                <center>
                    <div className="card-body">
                        <a style={{ color: "#4299e1" }}>
                            Image {this.props.val}
                        </a>
                    </div>
                </center>
            </div>
        );
    }
}

export default Images;
