import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonsSection from "@/components/dashboard/buttons-section";

describe("ButtonsSection Component", () => {
  it("renders both buttons correctly", () => {
    render(<ButtonsSection />);

    expect(
      screen.getByRole("button", { name: /go back/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /save & proceed/i })
    ).toBeInTheDocument();
  });

  it("calls the click events on buttons", async () => {
    render(<ButtonsSection />);
    const user = userEvent.setup();

    const goBackButton = screen.getByRole("button", { name: /go back/i });
    const saveProceedButton = screen.getByRole("button", {
      name: /save & proceed/i,
    });

    const goBackClick = jest.fn();
    const saveProceedClick = jest.fn();

    goBackButton.onclick = goBackClick;
    saveProceedButton.onclick = saveProceedClick;

    await user.click(goBackButton);
    await user.click(saveProceedButton);

    expect(goBackClick).toHaveBeenCalledTimes(1);
    expect(saveProceedClick).toHaveBeenCalledTimes(1);
  });
});
