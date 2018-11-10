import React from 'react';

export default class ComputerScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
            return (
                <div id="screen">
                    <img alt={ this.props.title + " Website Screenshot"} className="screenshot" src={'../assets/images/screenshots/' + this.props.imgSrc } />
                    <img alt="Computer screen graphic" id="mask" src="../assets/images/Macbook-PNG-Picture.png" srcSet="../assets/images/Macbook-PNG-Picture.png 1x, ../assets/images/Macbook-PNG-Picture@2x.png 2x" />
                </div>
            );
       
    }
}
