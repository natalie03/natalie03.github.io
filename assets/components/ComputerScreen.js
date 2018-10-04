import React from 'react';

export default class ComputerScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { screenShot } = this.props;
            return (
                <div id="screen">
                    <img className="screenshot" src={'../assets/images/screenshots/' + this.props.imgSrc } />
                    <img id="mask" src="../assets/images/Macbook-PNG-Picture.png" srcSet="../assets/images/Macbook-PNG-Picture.png 1x, ../assets/images/Macbook-PNG-Picture@2x.png 2x" />
                </div>
            );
       
    }
}
