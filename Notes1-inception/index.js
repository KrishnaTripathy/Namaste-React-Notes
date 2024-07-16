
// js code
// const heading = document.createElement("h1");
// heading.innerHTML =  "Hello World!";

// const root = document.getElementById("root");//this root basically reference to this div
// root.appendChild(heading); //heading is go as a child inside in the root




const heading = React.createElement( //heading is a react element
"h1",                        //all are the props
{id: "heading", xyz: "abc"}, //this is attribute
"Hello World from React!" //this is the children go inside the h1 tag
);
console.log(heading); 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // we are passing js object to the render file






{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div> */}

// ReactElement(Object) => HTML(Browser Understands)

// nested html structure
// const parent = React.createElement("div",{id:"parent"},
// React.createElement("div",{ id: "child" },
// React.createElement("h1",{},"I'M h1 tag")
// )
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); // parent is a object




// more than one children you have to convert this into array
// Warning: Each child in a list should have a unique "key" prop.
{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */}


// const parent = React.createElement("div",{id:"parent"},
// React.createElement("div",{ id: "child" },
// [React.createElement("h1",{},"I'M h1 tag"),
// React.createElement("h2",{},"I'M h2 tag")]
// )
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); // parent is a object







{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
<div id="child2">
    
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
   </div>
</div> */}



const parent = React.createElement(
    "div",{id:"parent"},[
    React.createElement("div",{ id: "child" },
[React.createElement("h1",{},"I'M h1 tag"),
React.createElement("h2",{},"I'M h2 tag")]
),
React.createElement("div",{ id: "child2" },
[React.createElement("h1",{},"I'M h1 tag"),
React.createElement("h2",{},"I'M h2 tag")]
),
    ]);

    // it is so much complicated so we have to use jsx

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
