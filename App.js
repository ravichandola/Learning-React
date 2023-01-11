import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () =>(
  <h1 id="title" key="h2">
    Frontend Cravings
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

const RestrauntCard = () =>{
  return(
    <div className="card">
      <img src = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/egl4xnbo92lybrlw2hg2"/>
      <h2>Burger King</h2>
      <h3>Burgers, American</h3>
      <h4>4.2 Stars</h4>
    </div>
  )
}

const BodyComponent = () =>{
  return(
  <div>
   <RestrauntCard/>
   </div>
  )
}

const FooterComponent = () =>{
  return <h3>Footer Components</h3>
}

const AppLayout = () => {
  return(
      <>
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
      </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);