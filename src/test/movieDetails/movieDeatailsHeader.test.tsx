import { screen } from "@testing-library/react";
import MovieDetailsHeader from "../../components/MovieDetails/MovieDetailsHeader/MovieDetailsHeader";
import { renderWithProviders } from "../../utils/testUtils.";

describe("MovieDetailsHeader", () => {
  it("renders MovieDetailsHeader correctly", () => {
    renderWithProviders(<MovieDetailsHeader />);
    expect(screen.getByText(/netflix/i)).toBeInTheDocument();
    expect(screen.getByText(/roulette/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
