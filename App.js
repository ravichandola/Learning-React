import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () =>(                                            
<h1 id="tit-1" key="h1">
  This is title Component
</h1>

);

const HeaderComponent = () => {
  return(
   <div>
    {Title()}
    <h2> This is the React Functional Component</h2>
    <h2> This is the H2 Tag</h2>

   </div>
  )
};

  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<HeaderComponent/>);