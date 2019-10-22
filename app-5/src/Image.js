import React, { Component } from "react";

class Image extends Component{
    render(){
        return(
            <div>
             <img src={this.props.myImage} alt={'cats'}/>
             <caption>409 Conflict</caption>
            </div>
        )
    }

}
export default Image;
