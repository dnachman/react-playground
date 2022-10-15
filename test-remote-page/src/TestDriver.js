import React from "react";
import { ReactDOM } from "react";
import babel from "@babel/core";

export default function TestDriver(props) {
    // https://gist.github.com/tonytonyjan/616022dce75f8e6c1603bbeb94ec46a4
    function loadRemoteComponent(url) {
        console.log("loadRemoteComponent called");
        return fetch(url)
            .then((res) => res.text())
            .then((source) => {
                // var exports = {};
                // function require(name) {
                //     if (name === "react") return React;
                //     else
                //         throw `You can't use modules other than "react" in remote component.`;
                // }
                console.log(source);
                const transformedSource = babel.transform(source, {
                    presets: ["@bable/preset-react", "@babel/preset-env"],
                    resolve: {
                        fallback: { path: require.resolve("path-browserify") },
                    },
                }).code;
                return transformedSource;
                // eval(transformedSource);
                // return exports.__esModule ? exports.default : exports;
            });
    }

    loadRemoteComponent("/test-driver-empty.js").then((TestDriver) => {
        ReactDOM.render(<TestDriver />, document.getElementById("test-driver"));
    });

    // loadRemoteComponent("https://codepen.io/tonytonyjan/pen/kXvamy.babel").then(
    //     (HelloES6) => {
    //         ReactDOM.render(<HelloES6 />, document.getElementById("hello_es6"));
    //     }
    // );

    return (
        <>
            <div id="test-driver">test-driver</div>
        </>
    );
}
