import { screen } from "@testing-library/react";
import Error from "../../components/common/Error/Error";
import NotFound from "../../components/common/Error/NotFound";
import { renderWithProviders } from "../../utils/testUtils.";

test("renders Error correctly", () => {
  renderWithProviders(<Error>Error</Error>);
  expect(screen.getByText(/error/i)).toBeInTheDocument();
});

test("renders NotFound correctly", () => {
  renderWithProviders(<NotFound />);
  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  expect(screen.getByText(/404/i)).toBeInTheDocument();
});
