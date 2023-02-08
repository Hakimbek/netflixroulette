import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export function renderWithProviders(ui: React.ReactElement) {
  return render(
    <MemoryRouter>
      <Provider store={store}>{ui}</Provider>
    </MemoryRouter>
  );
}
