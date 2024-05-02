const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"children"},[
        React.createElement("h1",{id:"gc1"},"I am the first grandChild"),
        React.createElement("h2",{id:"gc2"},"I am the second grandChild")
    ])
)

root.render(parent);


