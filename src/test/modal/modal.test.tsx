import { screen } from "@testing-library/react";
import Modal from "../../components/Modal/Modal";
import DeleteModal from "../../components/Modal/DeleteModal/DeleteModal";
import user from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils.";

describe("Modal", () => {
  it("renders add and edit Modal correctly", async () => {
    user.setup();
    const handleButton = jest.fn();
    renderWithProviders(
      <Modal
        title={"Add movie"}
        handleCloseButton={handleButton}
        movie={null}
      />
    );

    expect(screen.getByText(/add movie/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Title" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Rating" })).toBeInTheDocument();
    expect(
      screen.getByRole("spinbutton", { name: "Runtime" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Movie url" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Release" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Overview" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reset" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();

    const closeButton = screen.getByAltText("close");
    await user.click(closeButton);
    expect(handleButton).toBeCalledTimes(1);
  });

  it("renders delete Modal correctly", async () => {
    user.setup();
    const handleButton = jest.fn();
    renderWithProviders(
      <DeleteModal handleCloseButton={handleButton} movieId={10} />
    );

    expect(screen.getByText(/delete movie/i)).toBeInTheDocument();

    const closeButton = screen.getByAltText("close");
    await user.click(closeButton);
    expect(handleButton).toBeCalledTimes(1);
  });
});
