import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from "./images/icon.png";
import home from "./images/home.png";

const Title = () =>(                                            
<ul className="title">
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>

);

const SearchComponent = () => {
  return (
    <input
      className="search"
      key="search-bar"
      placeholder={"I think you travel to search and you come back home to find yourself there"}
    />
  );
};

const NavigationBar = () =>{
  return(
    <div className="NavigationBar">
    <img src={logo} alt="logo" width="40px" height="40px" />
    <SearchComponent />
    {Title()}
    <img src={home} alt="logo" width="40px" height="40px" />
  </div>
  )
}
const HeaderComponent = () => {
  return(
   <div>
    {NavigationBar()}
    
    <h2> This is the React Functional Component</h2>
    <h2> This is the H2 Tag</h2>

   </div>
  )
};

  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<HeaderComponent/>);