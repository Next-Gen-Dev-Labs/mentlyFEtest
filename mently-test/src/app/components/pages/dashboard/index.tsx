'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import ActivityItem from '../../shared/activity-item';
import ApplicationCard from '../../shared/application-card';
import GroupCallCard from '../../shared/group-call-card';
import MentorCard from '../../shared/mentor-card';
import ProgramCard from '../../shared/program-card';
import TopBar from '../../shared/top-bar';
import WelcomeHeader from '../../shared/welcome-header';
import DashboardLayout from './dashboard-layout';
import SectionCard from '../../shared/section-card';
import { AppSelect } from '../../shared/app-select';

import {
  programs,
  groupCalls,
  applications,
  mentors,
  activities,
} from '@/app/constants/data';
import { ProgramStatus, Role } from '@/app/types/enum';
import UserChart from '../../shared/user-chat';
import ManageWidgetsDrawer from '../../shared/widgets';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

const DashboardPage = () => {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [programFilter, setProgramFilter] = useState<string>(
    ProgramStatus.Active
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [widgetVisibility, setWidgetVisibility] = useState({
    Programs: true,
    GroupCalls: true,
    Mentors: true,
    RecentActivity: true,
    Applications: true,
    Earnings: false,
    Forum: false,
    ProgramAnalysis: false,
  });

  const handleMenuClick = (section: string) => {
    setMenuOpen(menuOpen === section ? null : section);
    console.log(`Menu clicked for ${section}`);
  };

  const handleProgramFilterChange = (value: string) => {
    setProgramFilter(value);
    console.log(`Program filter changed to: ${value}`);
  };

  const handleAccept = useCallback((name: string) => {
    console.log(`Accepted ${name}`);
  }, []);

  const handleReject = useCallback((name: string) => {
    console.log(`Rejected ${name}`);
  }, []);

  const handleMessage = useCallback((name: string) => {
    console.log(`Messaging ${name}`);
  }, []);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleSaveWidgets = (widgets: { name: string; visible: boolean }[]) => {
    const updatedVisibility = widgets.reduce(
      (acc, widget) => ({
        ...acc,
        [widget.name.replace(' ', '')]: widget.visible,
      }),
      {} as {
        Programs: boolean;
        GroupCalls: boolean;
        Mentors: boolean;
        RecentActivity: boolean;
        Applications: boolean;
        Earnings: boolean;
        Forum: boolean;
        ProgramAnalysis: boolean;
      }
    );
    setWidgetVisibility(updatedVisibility);
    console.log('Saved widget visibility:', updatedVisibility);
  };

  const handleResetWidgets = () => {
    setWidgetVisibility({
      Programs: true,
      GroupCalls: true,
      Mentors: true,
      RecentActivity: true,
      Applications: true,
      Earnings: false,
      Forum: false,
      ProgramAnalysis: false,
    });
    console.log('Reset widget visibility to default');
  };

  const filteredPrograms = programs.filter(
    program => program.status === programFilter
  );

  return (
    <DashboardLayout>
      <TopBar onManageWidgets={handleOpenDrawer} />
      <WelcomeHeader
        title="Welcome Aboard, Blessing 👋"
        subtitle="We're thrilled to have you join Techrity Team!"
      />
      <main className="flex bg-gray-100 lg:px-2">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-6 py-6">
          {/* Programs and Users */}
          {widgetVisibility.Programs && (
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              custom={0}
            >
              <SectionCard
  title="Programs"
  seeAllRoute="/programs"
  onMenuClick={() => handleMenuClick('Programs')}
>
  <div className="flex items-center gap-2 mb-4">
    <div className="ml-auto">
      <AppSelect
        label="Filter"
        listItems={[
          { label: 'Active', value: ProgramStatus.Active },
          { label: 'Inactive', value: ProgramStatus.Inactive },
        ]}
        value={programFilter}
        onChange={handleProgramFilterChange}
        width="w-32"
        triggerStyle="border-gray-300 rounded-md"
      />
    </div>
  </div>
  <div className="space-y-6 h-[630px] overflow-y-auto">
    {filteredPrograms.length > 0 ? (
      filteredPrograms.map((program, index) => (
        <motion.div
          key={program.id}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          <ProgramCard
            title={program.title}
            description={program.description}
            mentor={program.mentor ?? ''}
            hostedBy={program.hostedBy ?? ''}
            imageSrc={program.imageSrc}
            category={program.category}
            mentorImageSrc={program.mentorImageSrc}
            status={program.status as ProgramStatus}
            pillTextColor={program.pillTextColor}
            pillBgColor={program.pillBgColor}
          />
        </motion.div>
      ))
    ) : (
      <p className="text-gray-500">
        No programs match the selected filter.
      </p>
    )}
  </div>
</SectionCard>
              <UserChart />
            </motion.div>
          )}

          <div className="lg:col-span-2 space-y-6">
            {/* Group Calls */}
            {widgetVisibility.GroupCalls && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                custom={1}
              >
                <SectionCard
                  title="Group Calls"
                  seeAllRoute="/group-calls"
                  onMenuClick={() => handleMenuClick('Group Calls')}
                >
                  <div className="flex flex-row overflow-x-auto gap-4 sm:gap-6 pb-4">
                    {groupCalls.map((call, index) => (
                      <motion.div
                        key={index}
                        className="flex-none w-72 sm:w-80"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                      >
                        <GroupCallCard
                          title={call.title}
                          date={call.date}
                          time={call.time}
                          groupTitle={call.groupTitle}
                          groupSubtitle={call.groupSubtitle}
                          imageSrc={call.imageSrc}
                          status={call.status}
                          mentorAvatars={call.mentorAvatars}
                          joinRoute={call.joinRoute}
                          groupLogoSrc={call.groupLogoSrc}
                        />
                      </motion.div>
                    ))}
                  </div>
                </SectionCard>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Applications */}
              {widgetVisibility.Applications && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={sectionVariants}
                  custom={2}
                >
                  <SectionCard
                    title="Applications"
                    seeAllRoute="/applications"
                    onMenuClick={() => handleMenuClick('Applications')}
                  >
                    <div className="space-y-6">
                      {/* Mentors */}
                      <div>
                        <h3 className="text-xs font-bold text-gray-400 mb-4">
                          Mentors
                        </h3>
                        <div className="space-y-2">
                          {applications.mentors.map((app, index) => (
                            <motion.div
                              key={`${app.role}-${app.email}-${index}`}
                              variants={cardVariants}
                              initial="hidden"
                              animate="visible"
                              custom={index}
                            >
                              <ApplicationCard
                                name={app.name}
                                email={app.email}
                                role={app.role as Role}
                                roleLabel={app.roleLabel}
                                experience={app.experience}
                                location={app.location}
                                timezone={app.timezone}
                                onAccept={() => handleAccept(app.name)}
                                onReject={() => handleReject(app.name)}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      {/* Students */}
                      <div>
                        <h3 className="text-xs font-bold text-gray-400 mb-4 mt-6 border-t border-gray-200 pt-4">
                          Students
                        </h3>
                        <div className="space-y-2">
                          {applications.students.map((app, index) => (
                            <motion.div
                              key={`${app.role}-${app.email}-${index}`}
                              variants={cardVariants}
                              initial="hidden"
                              animate="visible"
                              custom={index}
                            >
                              <ApplicationCard
                                name={app.name}
                                email={app.email}
                                role={app.role as Role}
                                roleLabel={app.roleLabel}
                                experience={app.experience}
                                location={app.location}
                                timezone={app.timezone}
                                onAccept={() => handleAccept(app.name)}
                                onReject={() => handleReject(app.name)}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SectionCard>
                </motion.div>
              )}

              {/* Mentors and Recent Activity */}
              <div className="space-y-6">
                {/* Mentors */}
                {widgetVisibility.Mentors && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    custom={3}
                  >
                    <SectionCard
                      title="Mentors"
                      seeAllRoute="/mentors"
                      addButton={true}
                      onMenuClick={() => handleMenuClick('Mentors')}
                    >
                      <div className="space-y-4">
                        {mentors.map((mentor, index) => (
                          <motion.div
                            key={`${mentor.name}-${index}`}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                          >
                            <MentorCard
                              name={mentor.name}
                              role={mentor.role}
                              avatarSrc={mentor.avatarSrc}
                              messageRoute={mentor.messageRoute}
                              onMessage={() => handleMessage(mentor.name)}
                            />
                          </motion.div>
                        ))}
                        <motion.div
                          className="px-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                        >
                          <button className="w-full py-3 rounded-[40px] text-sm bg-[#DDD6FB] text-[#6F01D0] hover:bg-primary hover:text-white transition-colors">
                            See All
                          </button>
                        </motion.div>
                      </div>
                    </SectionCard>
                  </motion.div>
                )}

                {/* Recent Activity */}
                {widgetVisibility.RecentActivity && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    custom={4}
                  >
                    <SectionCard
                      title="Recent Activity"
                      seeAllRoute="/recent-activity"
                      onMenuClick={() => handleMenuClick('Recent Activity')}
                    >
                      <div className="space-y-4">
                        {activities.map((activity, index) => (
                          <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                          >
                            <ActivityItem
                              title={activity.title}
                              description={activity.description}
                              time={activity.time}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </SectionCard>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Manage Widgets Drawer */}
      <ManageWidgetsDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onSave={handleSaveWidgets}
        onReset={handleResetWidgets}
      />
    </DashboardLayout>
  );
};

export default DashboardPage;
