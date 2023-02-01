import { Component } from "react";
import Header from "./Header";
import Home from "./Home";

export default class HomeHeader extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            headerBackgroundVisible: false
        }
        this.handleToggleHeaderBackground = this.handleToggleHeaderBackground.bind(this)
    }
    
    handleToggleHeaderBackground(isVisible) {
        this.setState({
            headerBackgroundVisible: isVisible
        })
    }

    render() {
        return (
            <div>
                <Header isBackgroundVisible={this.state.headerBackgroundVisible} />
                <Home toggleHeaderBackground={this.handleToggleHeaderBackground} />
            </div>
        );
    }
}