import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { AppContext } from "../app/context/AppContext";
import Sidebar from "../app/components/sidebar/Sidebar";

interface CustomProviderProps {
    isSidebarOpen: boolean;
    isCollapsed: boolean;
    children: React.ReactNode;
}

// Helper component to provide custom context values
  const CustomProvider: React.FC<CustomProviderProps> = ({ isSidebarOpen, isCollapsed, children }) => (
    <AppContext.Provider value={{
      isSidebarOpen,
      setIsSidebarOpen: jest.fn(),
      isCollapsed,
      setIsCollapsed: jest.fn(),
      darktheme: false,
      setDarkTheme: jest.fn()
    }}>
      {children}
    </AppContext.Provider>
  );

describe("Sidebar Component", () => {
  it("renders Sidebar when isSidebarOpen is true", () => {
    render(
      <CustomProvider isSidebarOpen={true} isCollapsed={false}>
        <Sidebar />
      </CustomProvider>
    );
    
    expect(screen.getByRole("complementary")).toBeVisible();
  });

  it("hides Sidebar when isSidebarOpen is false", () => {
    render(
      <CustomProvider isSidebarOpen={false} isCollapsed={false}>
        <Sidebar />
      </CustomProvider>
    );

    expect(screen.queryByRole("complementary")).toBeNull();
  });

  it("applies collapsed class when isCollapsed is true", () => {
    render(
      <CustomProvider isSidebarOpen={true} isCollapsed={true}>
        <Sidebar />
      </CustomProvider>
    );

    expect(screen.getByRole("complementary")).toHaveClass("w-[5.9%]");
  });
});
