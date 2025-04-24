// import { render, screen } from "@testing-library/react";
// import Dashboard from "./Dashboard";

// // Mock all child components
// jest.mock("./WidgetPanel", () => {
//   return function MockWidgetPanel() {
//     return <div data-testid="widget-panel">WidgetPanel</div>;
//   };
// });

// jest.mock("./ProgramSection", () => {
//   return function MockProgramSection() {
//     return <div data-testid="program-section">ProgramSection</div>;
//   };
// });

// jest.mock("./UserSection", () => {
//   return function MockUserSection() {
//     return <div data-testid="user-section">UserSection</div>;
//   };
// });

// jest.mock("./GroupCallSection", () => {
//   return function MockGroupCallSection() {
//     return <div data-testid="group-call-section">GroupCallSection</div>;
//   };
// });

// jest.mock("./ApplicationSection", () => {
//   return function MockApplicationSection() {
//     return <div data-testid="application-section">ApplicationSection</div>;
//   };
// });

// jest.mock("./MentorSection", () => {
//   return function MockMentorSection() {
//     return <div data-testid="mentor-section">MentorSection</div>;
//   };
// });

// jest.mock("./RecentActivitiesSection", () => {
//   return function MockRecentActivitiesSection() {
//     return (
//       <div data-testid="recent-activities-section">RecentActivitiesSection</div>
//     );
//   };
// });

// describe("Dashboard", () => {
//   it("renders all sections", () => {
//     render(<Dashboard />);

//     expect(screen.getByTestId("widget-panel")).toBeInTheDocument();
//     expect(screen.getByTestId("program-section")).toBeInTheDocument();
//     expect(screen.getByTestId("user-section")).toBeInTheDocument();
//     expect(screen.getByTestId("group-call-section")).toBeInTheDocument();
//     expect(screen.getByTestId("application-section")).toBeInTheDocument();
//     expect(screen.getByTestId("mentor-section")).toBeInTheDocument();
//     expect(screen.getByTestId("recent-activities-section")).toBeInTheDocument();
//   });

//   it("applies correct layout classes", () => {
//     render(<Dashboard />);

//     // Check main container
//     const mainContainer = screen.getByRole("main");
//     expect(mainContainer).toHaveClass("h-[calc(100vh-64px)]");

//     // Check sidebar
//     const sidebar = screen.getByTestId("sidebar");
//     expect(sidebar).toHaveClass(
//       "lg:w-[30%]",
//       "lg:min-w-[300px]",
//       "lg:max-w-[400px]"
//     );

//     // Check content area
//     const contentArea = screen.getByTestId("content-area");
//     expect(contentArea).toHaveClass("lg:w-[70%]");
//   });
// });
