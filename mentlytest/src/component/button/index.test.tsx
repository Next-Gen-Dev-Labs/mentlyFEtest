import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SettingActionButtons from "./settingActionButton";

jest.mock("lucide-react", () => ({
    Settings: () => <svg data-testid="settings-icon" />,
    Copy: () => <svg data-testid="copy-icon" />,
  }));
  
describe("SettingActionButtons Component", () => {
  it("renders all buttons", () => {
    render(<SettingActionButtons />);
    const settingsButton = screen.getByTestId("settings-icon").closest("button");
    expect(settingsButton).toBeInTheDocument();
    

    const copyButton = screen.getByTestId("copy-icon").closest("button");
    expect(copyButton).toBeInTheDocument();
    
    expect(screen.getByText("Share")).toBeInTheDocument();
  });

  it("toggles the settings dropdown when the settings button is clicked", () => {
    render(<SettingActionButtons />);

    const settingsButton = screen.getByTestId("settings-icon").closest("button");
    expect(settingsButton).toBeInTheDocument();
    
    expect(screen.queryByText(/delete/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/clear/i)).not.toBeInTheDocument();

    fireEvent.click(settingsButton);

    expect(screen.getByText(/delete/i)).toBeInTheDocument();
    expect(screen.getByText(/clear/i)).toBeInTheDocument();

    fireEvent.click(settingsButton);
    expect(screen.queryByText(/delete/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/clear/i)).not.toBeInTheDocument();
  });
});
