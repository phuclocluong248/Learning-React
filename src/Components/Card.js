import { Component } from "react";
import Square from './Square'
import Label from './Label'
class Card extends Component{
    render(){
        const cardStyle = {
            height: 200,
            marginLeft: 150,
            marginTop: 20,
            width: 150,
            padding: 0,
            backgroundColor: "#FFF",
            boxShadow: "0px 0px 5px #666"
        }

        return (
            <div style={cardStyle}>
                <Square color={this.props.color}/>
                <Label title={this.props.title}/>
            </div>
        )
    }
}

export default Card