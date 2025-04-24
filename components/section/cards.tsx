"use client";

import ProgramCards from "../programscards";
import GroupCallCards from "../groupcallcards";
import ApplicationCards from "../applicationcards";
import UserCards from "../usercards";
import MentorCards from "../mentorcard";
import ActivityCards from "../activitycards";
import { useWidgets } from "@/components/context/widget-context";

const Cards = () => {
  const { isWidgetEnabled } = useWidgets();

  const showPrograms = isWidgetEnabled("programs");
  const showGroupCalls = isWidgetEnabled("group-calls");
  const showMentors = isWidgetEnabled("mentors");
  const showActivities = isWidgetEnabled("recent-activities");
  const showApplication = isWidgetEnabled("application");
  const showUser = isWidgetEnabled("users");

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
      {/* First column - Programs and Users */}
      <div className="space-y-4">
        {/* Programs section */}
        {showPrograms ? (
          <div className="space-y-4">
            <ProgramCards />
          </div>
        ) : (
          ""
        )}

        {/* Users chart section - Always shown as it's not in the widget list */}
        <div className="space-y-4">
          {showUser ? (
            <div className="space-y-4">
              <UserCards />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Second column  Group Calls, Applications, and Mentors/Activities */}
      <div className="space-y-4 lg:col-span-2">
        {showGroupCalls ? (
          <div className="space-y-4">
            <GroupCallCards />
          </div>
        ) : (
          ""
        )}

        {/* Mentors and Activities in a  grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(400px,60%)_minmax(200px,40%)] gap-2">
          {/* Applications section */}
          {showApplication ? (
            <div className="space-y-4 md:col-span-1">
              <ApplicationCards />
            </div>
          ) : (
            ""
          )}

          <div className="space-y-4">
            {/* Mentors section */}
            {showMentors ? (
              <div className="space-y-4">
                <MentorCards />
              </div>
            ) : (
              ""
            )}

            {/* Activities section */}
            {showActivities ? (
              <div className="space-y-4">
                <ActivityCards />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
