import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from "./images/icon.png";
import home from "./images/home.png";


/* const SearchComponent = () => {
  return (
    <input
      className="search"
      key="search-bar"
      placeholder={"I think you travel to search and you come back home to find yourself there"}
    />
  );
};
*/

/*const NavigationBar = () =>{
  return(
    <div className="NavigationBar">
    <img src={logo} alt="logo" width="40px" height="40px" />
    <SearchComponent />
    {Title()}
    <img src={home} alt="logo" width="40px" height="40px" />
  </div>
  )
}
*/

const Title = () =>(
  <h1 id="title" key="h2">
    Hungry Buds
  </h1>
)

const HeaderComponent = () => {
  return(
   <div className='header'>
    <Title/>
    <div className="nav-items">
      <ul >
        <li>Home</li>
        <li>About </li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>


    </div>
    

   </div>
  )
};



const AppLayout = () => {
  return(
      {/**
        Header Component
          -Logo
          -List Items (Right Side)
          - Cart
        Body
          - Search Bar
          - Restaurant List
          - Restaurant Cards
            - Image
            - Name
            - Rating
            - Cuisines
        Footer
          - Links
          - Copyright
      */
      
      }
    )


}

  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<HeaderComponent/>);