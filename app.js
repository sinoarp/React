/*
*    <div id="parent">
*        <div id="child1">
*                <h1>I'm h1 tag</h1>
*                <h2>I'm h2 tag</h2>
*        </div>
*        <div id="child2">
*                <h1>I'm h1 tag</h1>
*                <h2>I'm h2 tag</h2>
*        </div>    
*    </div> 
*/

const parent = React.createElement("div",{id:"parent"}, [
    React.createElement("div" , {id:"child1"},[
        React.createElement("h1",{},"I'm h1 tag"),
        React.createElement("h2",{},"I'm h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I'm h1 tag"),
        React.createElement("h2",{},"I'm h2 tag"),
    ]),
]);



const heading = React.createElement(
    "h1",
    {id:"heading" , xyz:"abc"},
    "Hello World from React!"
);

console.log(heading); // heading is object 
// React.createElement() return an object
// this object is an react element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
// render() is responsible for converting heading object
// into an heading tag and puting it into browser's DOM

root.render(parent);

//** NOTE: here heading has been replaced by parent