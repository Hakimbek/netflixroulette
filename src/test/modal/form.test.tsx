import { screen } from "@testing-library/react";
import ModalForm from "../../components/common/Modal/ModalForm/ModalForm";
import user from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils.";

describe("Form", () => {
  it("renders title input correctly", async () => {
    user.setup();
    const handleButton = jest.fn();
    renderWithProviders(
      <ModalForm handleCloseButton={handleButton} movie={null} />
    );
    const titleInput = screen.getByRole("textbox", { name: "Title" });
    expect(titleInput).toBeInTheDocument();
    await user.type(titleInput, "Puss in Boots");
    expect(titleInput).toHaveValue("Puss in Boots");
  });

  it("renders rating input correctly", async () => {
    user.setup();
    const handleButton = jest.fn();
    renderWithProviders(
      <ModalForm handleCloseButton={handleButton} movie={null} />
    );
    const ratingInput = screen.getByRole("textbox", { name: "Rating" });
    expect(ratingInput).toBeInTheDocument();
    await user.type(ratingInput, "10");
    expect(ratingInput).toHaveValue("10");
  });

  it("renders runtime input correctly", async () => {
    user.setup();
    const handleButton = jest.fn();
    renderWithProviders(
      <ModalForm handleCloseButton={handleButton} movie={null} />
    );
    const runtimeInput = screen.getByRole("spinbutton", { name: "Runtime" });
    expect(runtimeInput).toBeInTheDocument();
    await user.type(runtimeInput, "120");
    expect(runtimeInput).toHaveValue(120);
  });

  it("renders movie url input correctly", async () => {
    user.setup();
    const handleButton = jest.fn();
    renderWithProviders(
      <ModalForm handleCloseButton={handleButton} movie={null} />
    );
    const movieUrlInput = screen.getByRole("textbox", { name: "Movie url" });
    expect(movieUrlInput).toBeInTheDocument();
    await user.type(movieUrlInput, "https://movie.com");
    expect(movieUrlInput).toHaveValue("https://movie.com");
  });

  it("renders release input correctly", async () => {
    user.setup();
    const handleButton = jest.fn();
    renderWithProviders(
      <ModalForm handleCloseButton={handleButton} movie={null} />
    );
    const movieUrlInput = screen.getByRole("textbox", { name: "Release" });
    expect(movieUrlInput).toBeInTheDocument();
    await user.type(movieUrlInput, "2022-10-12");
    expect(movieUrlInput).toHaveValue("2022-10-12");
  });

  it("renders overview input correctly", async () => {
    user.setup();
    const handleButton = jest.fn();
    renderWithProviders(
      <ModalForm handleCloseButton={handleButton} movie={null} />
    );
    const movieUrlInput = screen.getByRole("textbox", { name: "Overview" });
    expect(movieUrlInput).toBeInTheDocument();
    await user.type(movieUrlInput, "Overview");
    expect(movieUrlInput).toHaveValue("Overview");
  });
});
