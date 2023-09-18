import React from "react";

const Hello = () => {
    // return (
        // <div className="dummyClasss">
        //     <h1>hello vishvass2</h1>
        // </div>
    // )
    return React.createElement(
        "div", 
        {id: "hello", className: "dummyClass"},
        React.createElement("h1", null, "hello vishwas")
    )
}

export default Hello