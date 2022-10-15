import React from "react";
import TestDriver from "./TestDriver";
// import ReactDOM from "react-dom";

class DisplayHTML extends React.Component {
    state = {};

    componentDidMount() {
        fetch(this.props.url)
            .then((data) => data.text())
            .then((text) => this.setState({ html: text }));
    }

    render() {
        const { html } = this.state;
        if (!html) {
            return <div>Loading...</div>;
        }
        return (
            <div style={{ border: "1px solid red" }}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <h1>Hello World</h1>
            {/* <DisplayHTML url="/file.html" /> */}
            <TestDriver />
        </div>
    );
}

export default App;
