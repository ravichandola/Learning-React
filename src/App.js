import React from 'react';
import ReactDOM from 'react-dom/client';
import { BodyComponent } from './Components/Body';
import { HeaderComponent } from './Components/Header';
import FooterComponent from './Components/Footer';

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