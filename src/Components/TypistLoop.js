import { Component } from "react";
import Typist from "react-typist"
export default class TypistLoop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typing: true
        }
    }
    done = () => {
        setTimeout(() => {
            this.setState({ typing: false }, () => {
              this.setState({ typing: true })
            });

        }, 9000)
    }

    render() {
        return (
            <>
            {this.state.typing
                ? <Typist onTypingDone={this.done} {...this.props}>{this.props.children}</Typist>
                : ''
            }
            </>
        )
    }
}