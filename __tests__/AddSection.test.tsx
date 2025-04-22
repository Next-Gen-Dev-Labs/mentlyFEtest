import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddSection from "@/components/dashboard/add-section";

describe("AddSection Component", () => {
  it("renders correctly with the add section button and info text", () => {
    render(<AddSection />);

    expect(screen.getByText(/Add new section/i)).toBeInTheDocument();

    expect(
      screen.getByText(/\(maximum number of sections to add is 3\)/i)
    ).toBeInTheDocument();
  });

  it("allows the checkbox to be checked and unchecked", async () => {
    render(<AddSection />);
    const user = userEvent.setup();

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
