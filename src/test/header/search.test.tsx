import Search from "../../components/Header/Search/Search";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import user from "@testing-library/user-event";

describe("Search", () => {
  it("render search correctly", () => {
    render(<Search />, { wrapper: MemoryRouter });
    expect(screen.getByText(/find your movie/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("type text to search input", async () => {
    user.setup();
    render(<Search />, { wrapper: MemoryRouter });
    const searchInput = screen.getByRole("textbox");
    await user.type(searchInput, "Puss in boots");
    expect(searchInput).toHaveValue("Puss in boots");
  });
});
