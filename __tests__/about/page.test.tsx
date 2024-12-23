import { render, screen } from "@testing-library/react";
import About from "@/app/about/page";
import "@testing-library/jest-dom";

describe("About", () => {
  it("renders a heading", () => {
    render(<About />);

    const docH = screen.getByRole("heading", {
      name: "About",
      level: 2,
    });

    expect(docH).toBeInTheDocument();
  });

  it("renders something about", () => {
    render(<About />);

    const somethingAbout = screen.getByText(/^Lorem ipsum*/, { exact: false });

    expect(somethingAbout).toBeInTheDocument();
  });
});
