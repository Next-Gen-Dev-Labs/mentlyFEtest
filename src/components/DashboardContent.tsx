"use client";

import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgramCard from './ProgramCard';
import UserStatsCard from './UserStatsCard';
import ApplicationsSection from './ApplicationsSection';
import MentorsSection from './MentorsSection';
import RecentActivitiesSection from './RecentActivitiesSection';
import ManageWidget from './ManageWidget';

interface WidgetSettings {
  programs: boolean;
  groupCalls: boolean;
  mentors: boolean;
  recentActivities: boolean;
  application: boolean;
  userStats: boolean;
  forum: boolean;
  programAnalysis: boolean;
}

const DashboardContent: FC = () => {
  const [isManageWidgetOpen, setIsManageWidgetOpen] = useState<boolean>(false);
  const [activeWidgets, setActiveWidgets] = useState<WidgetSettings>({
    programs: true,
    groupCalls: true,
    mentors: true,
    recentActivities: true,
    application: true,
    userStats: true,
    forum: false,
    programAnalysis: false,
  });

  // Load saved widget settings from localStorage on initial render
  useEffect(() => {
    const savedWidgets = localStorage.getItem('dashboardWidgets');
    if (savedWidgets) {
      setActiveWidgets(JSON.parse(savedWidgets));
    }
  }, []);

  const handleSaveWidgets = (widgetSettings: WidgetSettings) => {
    setActiveWidgets(widgetSettings);
    localStorage.setItem('dashboardWidgets', JSON.stringify(widgetSettings));
  };

  const programs = [
    {
        id: 1,
        title: 'Fundamentals of User Interface & Experience',
        type: 'Program',
        status: 'Ongoing',
        image: '/program1.jpg',
        description: 'This program is a hands-on guide designed for designers who want to master user interface and experience aspects in their designs. The program approach...',
        mentors: ['/avatar1.jpg', '/avatar2.jpg', '/avatar3.jpg'],
        students: 15,
        duration: '6 Months'
      },
      {
        id: 2,
        title: 'Colour Hack Practical Group Call',
        type: 'Webinar',
        status: 'Ongoing',
        image: '/program2.jpg',
        description: 'This program is a hands-on guide designed for designers who want to master color aspects in their designs. The program approach...',
        mentors: ['/avatar4.jpg'],
        students: 10,
        duration: '1 Month'
    },
    {
      id: 3,
      title: 'Colour Hack Practical Group Call',
      type: 'Webinar',
      status: 'Ongoing',
      image: '/program2.jpg',
      description: 'This program is a hands-on guide designed for designers who want to master color aspects in their designs. The program approach...',
      mentors: ['/avatar4.jpg'],
      students: 10,
      duration: '1 Month'
    }
  ];

  const groupCalls = [
    {
        id: 1,
        title: 'Weekly Meeting - Product Demo Review with Testers',
        status: 'Ongoing',
        time: '09:00 AM - 10:00 AM',
        date: 'Wed, Jul 5, 2023',
        participants: 15
      },
      {
        id: 2,
        title: 'Weekly Meeting - Product Demo Review with Testers',
        status: 'Upcoming',
        time: '09:00 AM - 10:00 AM',
        date: 'Wed, Jul 5, 2023',
        participants: 15
      },
      {
        id: 3,
        title: 'Weekly Meeting - Product Demo Review with Testers',
        status: 'Ongoing',
        time: '09:00 AM - 10:00 AM',
        date: 'Wed, Jul 5, 2023',
        participants: 15
      }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const buttonHoverVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Widget Management Button */}
      <div className="flex justify-end">
        <motion.button 
          onClick={() => setIsManageWidgetOpen(true)}
          className="text-sm text-white bg-purple-600 hover:bg-purple-700 rounded-full px-4 py-2 flex items-center"
          whileHover={buttonHoverVariants.hover}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Manage Widgets
        </motion.button>
      </div>

      {/* Programs Section */}
      <AnimatePresence>
        {activeWidgets.programs && (
          <motion.section
            key="programs"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Programs</h2>
              <div className="flex items-center space-x-2">
                <motion.button 
                  className="text-sm text-purple-600 hover:underline"
                  whileHover={{ scale: 1.05 }}
                >
                  See all
                </motion.button>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">Filter:</span>
                  <select className="text-xs border rounded p-1">
                    <option>Active</option>
                    <option>All</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {programs.map(program => (
                <motion.div key={program.id} variants={itemVariants}>
                  <ProgramCard program={program} />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Group Calls Section */}
      <AnimatePresence>
        {activeWidgets.groupCalls && (
          <motion.section
            key="groupCalls"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Group Calls</h2>
              <motion.button 
                className="text-sm text-purple-600 hover:underline"
                whileHover={{ scale: 1.05 }}
              >
                See all
              </motion.button>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {groupCalls.map(call => (
                <motion.div 
                  key={call.id} 
                  className="bg-white rounded-lg shadow p-4"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-2">
                    <motion.div 
                      className={`w-2 h-2 rounded-full mr-2 ${
                        call.status === 'Ongoing' ? 'bg-green-500' : 
                        call.status === 'Upcoming' ? 'bg-blue-500' : 'bg-gray-500'
                      }`}
                      animate={call.status === 'Ongoing' ? { scale: [1, 1.3, 1], opacity: [1, 0.8, 1] } : {}}
                      transition={call.status === 'Ongoing' ? { repeat: Infinity, duration: 2 } : {}}
                    ></motion.div>
                    <span className="text-xs font-medium">{call.status}</span>
                  </div>
                  <h3 className="font-medium mb-2">{call.title}</h3>
                  <div className="text-xs text-gray-500 mb-2">
                    <div>{call.time}</div>
                    <div>{call.date}</div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <motion.button 
                      className="text-xs text-purple-600 border border-purple-600 rounded-full px-4 py-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Participants
                    </motion.button>
                    <motion.button 
                      className="text-xs text-white bg-purple-600 rounded-full px-4 py-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Join Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Applications Section */}
        {activeWidgets.application && (
          <motion.div variants={itemVariants}>
            <ApplicationsSection />
          </motion.div>
        )}

        {/* Mentors Section */}
        {activeWidgets.mentors && (
          <motion.div variants={itemVariants}>
            <MentorsSection />
          </motion.div>
        )}
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* User Stats */}
        {activeWidgets.userStats && (
          <motion.div variants={itemVariants}>
            <UserStatsCard />
          </motion.div>
        )}

        {/* Recent Activities */}
        {activeWidgets.recentActivities && (
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <RecentActivitiesSection />
          </motion.div>
        )}
      </motion.div>

      {/* Forum Section (optional) */}
      <AnimatePresence>
        {activeWidgets.forum && (
          <motion.section
            key="forum"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Forum</h2>
              <motion.button 
                className="text-sm text-purple-600 hover:underline"
                whileHover={{ scale: 1.05 }}
              >
                See all
              </motion.button>
            </div>
            <motion.div 
              className="bg-white rounded-lg shadow p-4"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="text-gray-500">Forum content will be displayed here.</p>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Program Analysis Section (optional) */}
      <AnimatePresence>
        {activeWidgets.programAnalysis && (
          <motion.section
            key="programAnalysis"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Program Analysis</h2>
              <motion.button 
                className="text-sm text-purple-600 hover:underline"
                whileHover={{ scale: 1.05 }}
              >
                View details
              </motion.button>
            </div>
            <motion.div 
              className="bg-white rounded-lg shadow p-4"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="text-gray-500">Program analytics and insights will be displayed here.</p>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Widget Manager Component */}
      <ManageWidget 
        isOpen={isManageWidgetOpen}
        onClose={() => setIsManageWidgetOpen(false)}
        onSave={handleSaveWidgets}
        initialSettings={activeWidgets}
      />
    </motion.div>
  );
};

export default DashboardContent;