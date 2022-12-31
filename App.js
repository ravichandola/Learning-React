const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "This is My first React App"
  );
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Yeah I Know, Its Awesome"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1]
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);