import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () =>  Promise.resolve(MOCK_DATA_NAME)
    });
})

it("Should load Restaurant Menu Component", async() => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Recommended (9)");

    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("footItems").length).toBe(9);

    expect(screen.getByText("Cart (0)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", {name:"Add +"});
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    expect(screen.getAllByTestId("footItems").length).toBe(11);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("footItems").length).toBe(9);

    expect(screen.getByText("Cart is empty, Add Items to the Cart!.")).toBeInTheDocument();

});