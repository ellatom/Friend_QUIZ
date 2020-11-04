import React from 'react';
import '../Assets/carddetails.css'

class CardDetails extends React.Component {

    onClick = (e) =>
    {
        this.props.onAnswer(this.props.keyQA);
    }

    render() {
        return (
            <div className="cardView">
               <button className="answer" onClick={this.onClick}>
                   {this.props.answer}
                </button> 
            </div>

        )
    }
}
export default CardDetails;
