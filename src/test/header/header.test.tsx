import { render, screen } from "@testing-library/react";
import Header from "../../components/Header/Header";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("render Header correctly", () => {
    render(<Header />, { wrapper: MemoryRouter });
    expect(screen.getByText(/netflix/i)).toBeInTheDocument();
    expect(screen.getByText(/roulette/i)).toBeInTheDocument();

    expect(screen.getByText(/find your movie/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "+ Add movie" })
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("paragraph", { name: "Add movie" })
    ).not.toBeInTheDocument();
  });
});
