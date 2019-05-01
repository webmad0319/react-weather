import React from "react";

class Cities extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                {this.props.data.city}
                {this.props.data.temperature}
                {this.props.data.wheather}
            </div>  
        )
    }
}

export default Cities;