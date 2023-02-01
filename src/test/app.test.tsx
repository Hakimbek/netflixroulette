import App from "../components/App";
import { screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { renderWithProviders } from "../utils/testUtils.";

describe("App", () => {
  it("render MovieDetails correctly when clicking movie and magnifier button", async () => {
    user.setup();
    renderWithProviders(<App />);

    const movieCard = await screen.findByAltText("La La Land");
    await user.click(movieCard);

    expect(movieCard).toBeInTheDocument();
    expect(screen.getByText(/7.9/i)).toBeInTheDocument();
    expect(screen.getByText(/2016-12-29/i)).toBeInTheDocument();
    expect(screen.getByText(/2h 8m/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart."
      )
    ).toBeInTheDocument();

    const magnifierButton = await screen.findByAltText("Magnifier");
    await user.click(magnifierButton);

    expect(screen.queryByText(/7.9/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/2016-12-29/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/2h 8m/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart."
      )
    ).not.toBeInTheDocument();
  });
});
