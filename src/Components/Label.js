import { Component } from "react";

class Label extends Component{
    render(){
        const labelStyle={
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 13,
            margin: 0
        }

        return (
            <p style={labelStyle}>{this.props.title}</p>
        )
    }
}
export default Label