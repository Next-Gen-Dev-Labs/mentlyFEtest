import { render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import ProgramInfomation from "@/ProgramInfomation";

jest.mock("@/component/sections/leftsection", () => () => (
  <div data-testid="left-section">Left Section</div>
));
jest.mock("@/component/sections/rightsection", () => () => (
  <div data-testid="right-section">Right Section</div>
));

describe("ProgramInfomation Component", () => {
  


  it("renders without crashing", async () => {
    await act(async () => {
      render(<ProgramInfomation />);
    });
  
    expect(screen.getByTestId("left-section")).toBeInTheDocument();
    expect(screen.getByTestId("right-section")).toBeInTheDocument();
  });
  

  

  it("shows both sections on desktop", async () => {
    global.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"));
  
    await act(async () => {
      render(<ProgramInfomation />);
    });
  
    expect(screen.getByTestId("left-section")).toBeVisible();
    expect(screen.getByTestId("right-section")).toBeVisible();
  });
  
});
