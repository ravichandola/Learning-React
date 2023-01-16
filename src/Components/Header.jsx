
const Title = () =>(
    <h1 id="title" key="h2">
      Frontend Cravings
    </h1>
  )
  
  export const HeaderComponent = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About </li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };