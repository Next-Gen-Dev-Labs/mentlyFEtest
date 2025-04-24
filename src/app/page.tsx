"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import WidgetArrangement from "@/components/WidgetArrangement";
import WelcomeBanner from "@/components/WelcomeBanner";
import ProgramsWidget from "@/components/widgets/ProgramsWidget";
import GroupCallsWidget from "@/components/widgets/GroupCallsWidget";
import UsersWidget from "@/components/widgets/UsersWidget";
import ApplicationsWidget from "@/components/widgets/ApplicationsWidget";
import MentorsWidget from "@/components/widgets/MentorsWidget";
import RecentActivitiesWidget from "@/components/widgets/RecentActivitiesWidget";

/**
 * Widget interface defining the structure of dashboard widget items
 */
interface Widget {
  id: string; // Unique identifier for the widget
  name: string; // Display name for the widget
  isVisible: boolean; // Controls whether the widget is displayed
  component: string; // Component name for dynamic rendering
}

/**
 * Home Component - Main dashboard page
 *
 * Displays the dashboard with configurable widgets in a responsive layout
 */
export default function Home() {
  // State to manage visible widgets and their configuration
  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: "programs",
      name: "Programs",
      isVisible: true,
      component: "ProgramsWidget",
    },
    {
      id: "group-calls",
      name: "Group Calls",
      isVisible: true,
      component: "GroupCallsWidget",
    },
    {
      id: "users",
      name: "Users",
      isVisible: true,
      component: "UsersWidget",
    },
    {
      id: "mentors",
      name: "Mentors",
      isVisible: true,
      component: "MentorsWidget",
    },
    {
      id: "recent-activities",
      name: "Recent Activities",
      isVisible: true,
      component: "RecentActivitiesWidget",
    },
    {
      id: "applications",
      name: "Application",
      isVisible: true,
      component: "ApplicationsWidget",
    },
    {
      id: "earnings",
      name: "Earnings",
      isVisible: false,
      component: "EarningsWidget",
    },
    { id: "forum", name: "Forum", isVisible: false, component: "ForumWidget" },
    {
      id: "program-analysis",
      name: "Program Analysis",
      isVisible: false,
      component: "ProgramAnalysisWidget",
    },
  ]);

  // Controls initial loading animation
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after initial render to trigger animations
  useEffect(() => {
    // Small delay to ensure smooth animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  /**
   * Renders a widget component based on its type
   * @param widget - The widget configuration to render
   * @returns JSX element of the corresponding widget or null if not visible
   */
  const renderWidget = (widget: Widget) => {
    if (!widget.isVisible) return null;

    switch (widget.component) {
      case "ProgramsWidget":
        return <ProgramsWidget key={widget.id} />;
      case "GroupCallsWidget":
        return <GroupCallsWidget key={widget.id} />;
      case "UsersWidget":
        return <UsersWidget key={widget.id} />;
      case "ApplicationsWidget":
        return <ApplicationsWidget key={widget.id} />;
      case "MentorsWidget":
        return <MentorsWidget key={widget.id} />;
      case "RecentActivitiesWidget":
        return <RecentActivitiesWidget key={widget.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar navigation */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 lg:ml-48 w-full overflow-x-hidden">
        <TopBar />
        <main className="pt-20 w-full overflow-x-hidden">
          <div className="w-full max-w-full sm:max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 overflow-x-hidden">
            {/* Widget arrangement controls */}
            <div className="flex justify-end mb-4">
              <WidgetArrangement onWidgetsChange={setWidgets} />
            </div>

            {/* Welcome banner with fade-in animation */}
            <div
              className={`transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              data-testid="welcome-banner-container"
            >
              <WelcomeBanner />
            </div>

            {/* Main dashboard layout */}
            <div
              className={`flex flex-col lg:flex-row mt-1 gap-4 transition-all duration-700 w-full max-w-full overflow-hidden ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              data-testid="main-grid"
            >
              {/* Left Column - Programs and Users */}
              <div
                className="flex flex-col lg:w-[32%] space-y-4"
                style={{
                  animation: isLoaded
                    ? "fadeInLeft 0.7s ease-out forwards"
                    : "none",
                  opacity: 0,
                }}
              >
                {widgets
                  .filter((widget) =>
                    ["ProgramsWidget", "UsersWidget"].includes(widget.component)
                  )
                  .map((widget, index) => (
                    <div
                      key={widget.id}
                      style={{
                        animation: isLoaded
                          ? `fadeInUp 0.5s ease-out ${
                              index * 0.1 + 0.2
                            }s forwards`
                          : "none",
                        opacity: 0,
                      }}
                    >
                      {renderWidget(widget)}
                    </div>
                  ))}
              </div>

              {/* Right Column - Group Calls, Applications, Mentors, and Recent Activities */}
              <div
                className="flex flex-col lg:w-[68%] space-y-4"
                style={{
                  animation: isLoaded
                    ? "fadeInRight 0.7s ease-out forwards"
                    : "none",
                  opacity: 0,
                }}
              >
                {/* Group Calls */}
                {widgets
                  .filter((widget) => widget.component === "GroupCallsWidget")
                  .map((widget, index) => (
                    <div
                      key={widget.id}
                      style={{
                        animation: isLoaded
                          ? `fadeInUp 0.5s ease-out ${
                              index * 0.1 + 0.3
                            }s forwards`
                          : "none",
                        opacity: 0,
                      }}
                    >
                      {renderWidget(widget)}
                    </div>
                  ))}

                {/* Applications, Mentors, and Recent Activities */}
                <div className="flex flex-col md:flex-row mt-1 gap-4 w-full">
                  {/* Applications */}
                  <div
                    className="animate-fade-in flex-1"
                    style={{
                      animation: isLoaded
                        ? "fadeInUp 0.5s ease-out 0.4s forwards"
                        : "none",
                      opacity: 0,
                    }}
                  >
                    {widgets
                      .filter(
                        (widget) => widget.component === "ApplicationsWidget"
                      )
                      .map(renderWidget)}
                  </div>

                  {/* Mentors and Recent Activities */}
                  <div
                    className="flex flex-col flex-1 space-y-4"
                    style={{
                      animation: isLoaded
                        ? "fadeInUp 0.5s ease-out 0.5s forwards"
                        : "none",
                      opacity: 0,
                    }}
                  >
                    {widgets
                      .filter((widget) =>
                        ["MentorsWidget", "RecentActivitiesWidget"].includes(
                          widget.component
                        )
                      )
                      .map((widget, index) => (
                        <div
                          key={widget.id}
                          style={{
                            animation: isLoaded
                              ? `fadeInUp 0.5s ease-out ${
                                  index * 0.1 + 0.6
                                }s forwards`
                              : "none",
                            opacity: 0,
                          }}
                        >
                          {renderWidget(widget)}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
