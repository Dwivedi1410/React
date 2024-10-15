import React from "react";
import ReactDOM from "react-dom";



// const heading = React.createElement(
//     "h1",
//     {id:"heading"}, 
//     "Hello from React!"
// );

const root = ReactDOM.createRoot(document.getElementById('root'));    //note: Do not use  '#' while selecting id in getElementById

// root.render(heading);


//What does render means ?
//In React, the term render refers to the process of updating the DOM (Document Object Model) with React elements. Specifically, it involves taking a React component or React element (like a piece of UI) and displaying it inside a specific part of the web page, usually within a designated HTML element, such as a <div>.

// const heading = React.createElement("h1", {}, "Hello from React!");
//In the above code '{}' is used to give attributes to your tags.
//eg :- if you want to give the name of id to this h1 you can use :-
// const heading = React.createElement("h1", {id: "heading"}, "Hello from React!");



//Note :-    const heading = React.createElement(
                            //     "h1",
                            //     {id:"heading"}, 
                            //     "Hello from React!"
                            // );

            // console.log(heading);  //object

            //Now the render method will take this object and create a h1 tag and put it in desired location.






//now let's create this html structure using react

            // <div id:"parent">
            //     <div id:"child">
            //         <h1>"this is h1"</h1>
            //     <div>
            // </div>


// const parent = React.createElement(
//     "div", 
//     {id:"parent"}, 
//     React.createElement(
//         "div", 
//         {id:"child"}, 
//         React.createElement(
//             "h1", 
//             {}, 
//             "this is h1"
//         )
//     )
// );

// console.log(parent); //object






//what if we want to create siblings
            // <div id:"parent">
            //     <div id:"child">
            //         <h1>"this is h1"</h1>
            //         <h2>"this is h2"</h2>        here h1 and h2 are siblings
            //     <div>
            // </div>


// const parent = React.createElement(
//     "div", 
//     {id:"parent"}, 
//     React.createElement(
//         "div", 
//         {id:"child"}, [
//             React.createElement("h1", {}, "this is h1"),
//             React.createElement("h2", {}, "this is h2")
//         ]
//     )
// );






//what if we have to create this structure
            // <div id:"parent">
            //     <div id:"child1">
            //         <h1>"this is h1"</h1>
            //         <h2>"this is h2"</h2> 
            //     <div>
            //     <div id:"child2">
            //         <h1>"this is h1"</h1>
            //         <h2>"this is h2"</h2> 
            //     <div>
            // </div>


const parent = React.createElement(
    "div", 
    {id:"parent"}, [
        React.createElement(
            "div", 
            {id:"child1"}, [
                React.createElement("h1", {}, "this is h1"),
                React.createElement("h2", {}, "this is h2")
            ]
        ),
        React.createElement(
            "div", 
            {id:"child2"}, [
                React.createElement("h1", {}, "this is h1"),
                React.createElement("h2", {}, "this is h2")
            ]
        )
    ]
);


//this is very hard if we have to create more elements like this and it also become hard to undersatnd it

// => That's why we use jsx


root.render(parent);