"use client"
import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import ProgramInformation from './components/ProgramInformation/ProgramInformation';
import ProgramPreview from './components/ProgramPreview/ProgramPreview';
import { Menu, X } from 'react-feather';
import useIsMobile from './utils/useIsMobile';


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  const handleSidebarToggle = () => {
    if (isMobile) {
      setIsSidebarOpen(prev => !prev);
    } else {
      setIsExpanded(prev => !prev);
    }
  };



  return (
    <div className="flex min-h-screen relative">
      {/* Mobile Sidebar Toggle */}
      <button 
        // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        onClick={handleSidebarToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-purple-900 text-white rounded-md"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
         fixed top-0 left-0 h-full
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        transition-transform duration-300 ease-in-out
        z-40
      `}>
        <Sidebar isExpanded={isExpanded}
        isMobile={isMobile}
        onToggleExpand={handleSidebarToggle} />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 ml-0 lg:ml-20">
      <div className={`
        ${isExpanded ? 'lg:ml-44' : ''} 
        transition-all duration-300
      `}>
        {/* Header */}
        <Header 
          onPreviewToggle={() => setIsPreviewOpen(!isPreviewOpen)}
          showPreviewButton={true}
        />
        
        {/* Content Area */}
        <div className="flex flex-col lg:flex-row flex-1">
          {/* Form Section */}
          <div className=" w-full lg:w-[40%] min-w-0">
            <ProgramInformation />
          </div>
          
          {/* Preview Section */}
          <div className={`
             lg:w-[60%] bg-gray-50 border-l
            fixed lg:relative
            inset-y-0 right-0
            transform ${isPreviewOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
            transition-transform duration-300 ease-in-out
            w-full 
            z-30
            overflow-y-auto
          `}>
            <button 
              onClick={() => setIsPreviewOpen(false)}
              className="lg:hidden absolute top-4 right-4 p-2 bg-gray-200 rounded-full"
            >
              <X size={20} />
            </button>
            <ProgramPreview />
          </div>
        </div>
        
      </div>
        
      </div>

      {/* Overlay for mobile when sidebar/preview is open */}
      {(isSidebarOpen || isPreviewOpen) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => {
            setIsSidebarOpen(false);
            setIsPreviewOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default App;