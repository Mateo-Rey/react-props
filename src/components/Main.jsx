import React from "react";

function Main(props) {
    const {name, total} = props;
    return (
    <main>
        <h1><b>Hello {name} </b></h1>
    </main>
    )
}


export default Main;