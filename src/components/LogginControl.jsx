import React from "react";

class LogginControl extends React.Component {
    constructor(props) {
        console.log("LOGGINCONTROL CONSTRUCTOR");
        super(props);
    }

    componentDidMount() {
        console.log("LOGGINCONTROL MOUNTED");
    }

    componentDidUpdate() {
        console.log("LOGGINCONTROL UPDATED");
    }

    render() {
        console.log("LOGGINCONTROL RENDER");
        if (this.props.isLoggedIn) {
            return <h1>Logged In</h1>
        } else {
            return <h2>Logged Out</h2>
        }
    }
}

export default LogginControl;