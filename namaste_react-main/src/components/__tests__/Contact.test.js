import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Should load contact us component", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
});

test("Should load button inside contact component", () => {
    render(<Contact/>);

    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
});

test("Should load button inside contact component", () => {
    render(<Contact/>);

    const Submit = screen.getByText("Submit");
    // Assertion
    expect(Submit).toBeInTheDocument();
});

test("Should load inputName inside contact component", () => {
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("name");
    // Assertion
    expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes inside contact component", () => {
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes.length).toBe(2);
});

// Groping tescases using describe
describe("Contact Us page test cases", () => {
    test("Should load contact us component", () => {
      render(<Contact />);

      const heading = screen.getByRole("heading");
      // Assertion
      expect(heading).toBeInTheDocument();
    });

    test("Should load button inside contact component", () => {
      render(<Contact />);

      const button = screen.getByRole("button");
      // Assertion
      expect(button).toBeInTheDocument();
    });

    test("Should load button inside contact component", () => {
      render(<Contact />);

      const Submit = screen.getByText("Submit");
      // Assertion
      expect(Submit).toBeInTheDocument();
    });

    test("Should load inputName inside contact component", () => {
      render(<Contact />);

      const inputName = screen.getByPlaceholderText("name");
      // Assertion
      expect(inputName).toBeInTheDocument();
    });

    test("Should load 2 input boxes inside contact component", () => {
      render(<Contact />);

      const inputBoxes = screen.getAllByRole("textbox");
      // Assertion
      expect(inputBoxes.length).toBe(2); 
    });
});