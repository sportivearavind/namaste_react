import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


it("Should render Header Component with a login button", () =>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");  // good way
    // const loginButton = screen.getByText("Login");
    // const loginButton = screen.getByRole("button",{name: "Login"});  // If there are multiple buttons
    expect(loginButton).toBeInTheDocument();
})

// Checking cart items
it("Should render Header Component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0)"); // good way
  // const cartItems = screen.getByText(/Cart/); // good way
  expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button",{name: "Login"});  
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button",{name: "Logout"});
  expect(loginButton).toBeInTheDocument();
});