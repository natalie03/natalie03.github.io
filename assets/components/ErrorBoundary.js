import React from 'react';

export default class Smart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, error, info });
    }

    render() {
        if (this.state.hasError) {
            return (
                <React.Fragment>
                    <h2>Something went wrong!</h2>
                    <p><em>Error: {this.state.error}</em></p>
                    <p><small>{this.state.info.componentStack}</small></p>
                </React.Fragment>
            );
        }

        return this.props.children;
    }
}
