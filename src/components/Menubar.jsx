import React from "react";

function Menubar({name, setName}) {
    return (
        <>
        <nav>
            Menubar
        </nav>
        {name ? <button onClick={() => setName(null)}>Logout</button> :<button onClick={() => setName('Mason')}>Login</button> }
        </>
    )
}


export default Menubar;