import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png"
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
}


const RestaurantCard = () =>{
    return (
      <div
        className="res-card" 
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sjl1h0zjesag23aztzrs"></img>
        <h2>Thalappakatti</h2>
        <h3>Biriyani, North Indian</h3>
        <h3>4.3 stars</h3>
        <h3>30 minutes</h3>
      </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);



