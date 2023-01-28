import Search from "../components/Header/Search/Search";
import { renderWithProviders } from "../utils/testUtils";

describe("Search", () => {
  it("render search correctly", () => {
    renderWithProviders(<Search />);
  });
});
