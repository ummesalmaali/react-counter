
import React, {Component} from 'react';

class Card2 extends Component{
    render(){
        return(
           <div>
                <h3> Hello to the world from card 2</h3>
            <p>{this.props.name}</p>
           </div>
        )
    }
}
export default Card2;


