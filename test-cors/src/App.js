import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
    const [output, setOutput] = useState("");

    const handleCallUrl = (event) => {
        console.log("inside handleCallUrl");
        event.preventDefault();
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
        };
        axios
            .post(
                "https://yaarvlc4al2bbhqfthobtppmoy0ebmst.lambda-url.us-east-1.on.aws/create",
                { link: "https://testing.localhost.com" },
                { headers }
            )
            .then((response) => {
                console.log("Success: " + response.data);
                setOutput(response.data);
            })
            .catch((error) => {
                console.log("Error ========>", error);
            });
    };

    return (
        <div className="App">
            <button onClick={handleCallUrl}>Go</button>
            <br />
            {JSON.stringify(output)}
        </div>
    );
}

export default App;
