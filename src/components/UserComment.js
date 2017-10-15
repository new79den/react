import React, {Component} from 'react';

export default class UserComment extends Component {
    constructor(props) {
        super(props);
       this.state = {
           hide: false
       }
    }

    toggle(){
        this.setState({
            hide: !this.state.hide
        })
    }

    render() {
        const {user} = this.props;
        const {hide} = this.state;

        return (
            <div>
                <h3>{user}</h3>
                <button onClick={this.toggle.bind(this, null)}>{hide ? "show" : "hide"}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody(){
        if (this.state.hide) return null;

        return <section>{this.props.text}</section>
    }
}
