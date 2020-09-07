import React, { Component } from 'react'

class PopupMarker extends Component {
    state = {
        title: this.props.title,
        address: this.props.address,
        fuelPrice: this.props.fuelPrice,
        adBlue: this.props.adBlue,
    }

    render() { 

        return ( 
            <div className = "flex-container">
                <div className = "left-container ">
                    <div className = "popup-title">{"תחנת דלק " + this.props.title}</div>
                    <div className = "">{this.props.address}</div>   
                    <div className = "margin-top">
                    
                        {this.state.adBlue  === "כן" ? "תחנה זו מספקת שירותי אוריאה": ""}
                        <i className="fas fa-check padding-left"/>
                        
                    </div>
                    <div className = "margin-top">לחץ כאן לצפייה בפרטים נוספים</div>                   
                </div>
                <div className = "right-container">
                    <div className= " update-date">היום</div> 
                    <div className= "fuel-price">{this.props.fuelPrice}</div> 
                    <div className= " icons-row">
                        <i className="fas fa-gas-pump"></i>  
                        <i className="fas fa-shekel-sign"></i> 
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default PopupMarker;