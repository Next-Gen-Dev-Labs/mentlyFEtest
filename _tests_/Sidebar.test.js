import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "@/components/Sidebar";
import { useTheme } from "next-themes";

jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("Sidebar Component", () => {
  it("should toggle theme from light to dark when the switch is clicked", () => {
    // const setThemeMock = jest.fn();
    // render(<Sidebar setThemeMock={jest.fn()} />);
    
    // setThemeMock?.mockReturnValue({
    //   theme: "light",
    //   setTheme: setThemeMock,
    // });

    // // Find the toggle switch
    // const themeSwitch = screen.getByTestId("theme-toggle");

    // // Click the switch
    // fireEvent.click(themeSwitch);

    // // Ensure the theme changed
    // expect(setThemeMock).toHaveBeenCalledWith("dark");
  });
});