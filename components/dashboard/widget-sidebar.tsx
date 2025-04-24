"use client"

import { Button } from "@/components/ui/button";
import { X, Menu, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface WidgetSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Widget {
  id: string;
  name: string;
  enabled: boolean;
}

export function WidgetSidebar({ isOpen, onClose }: WidgetSidebarProps) {
  const [widgets, setWidgets] = useState<Widget[]>([
    { id: "programs", name: "Programs", enabled: true },
    { id: "groupCalls", name: "Group Calls", enabled: true },
    { id: "mentors", name: "Mentors", enabled: true },
    { id: "recentActivities", name: "Recent Activities", enabled: true },
    { id: "application", name: "Application", enabled: true },
    { id: "earnings", name: "Earnings", enabled: false },
    { id: "forum", name: "Forum", enabled: false },
    { id: "programAnalysis", name: "Program Analysis", enabled: false },
  ]);

  const [originalState] = useState([...widgets]);

  const handleToggle = (id: string) => {
    setWidgets(widgets.map(widget => 
      widget.id === id ? { ...widget, enabled: !widget.enabled } : widget
    ));
  };

  const handleReset = () => {
    setWidgets([...originalState]);
  };

  const handleSave = () => {
    console.log('Saving widget state:', widgets);
    onClose();
  };

  return (
    <>
      {/* Overlay with animation - now blurs everything including the sidebar */}
      

      {/* Sidebar with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-[400px] bg-white/95 backdrop-blur-sm z-50 p-6 shadow-xl overflow-y-auto"
          >
            <div className="flex justify-end">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose}
                className="rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <hr />

            
            <div className="flex justify-between items-center mt-8 mb-6">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-bold text-violet-700"
              >
                Manage Widget
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-gray-600 mb-8"
            >
              Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.
            </motion.p>

            <motion.div 
              className="space-y-1 mb-6"  
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {widgets.map((widget, index) => (
                <motion.div
                  key={widget.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.05 }}
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Menu className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">{widget.name}</span>
                  </div>
                  
                  <button
                    onClick={() => handleToggle(widget.id)}
                    className={`relative h-5 w-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                      widget.enabled 
                        ? 'border-[#07C500] bg-[#07C500]' 
                        : 'border-violet-200 bg-white'
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: widget.enabled ? 1 : 0 }}
                      className="text-white"
                    >
                      <Check className="h-3 w-3" />
                    </motion.div>
                  </button>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons moved up and made sticky for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="sticky bottom-0 bg-white/95 py-4 -mx-6 px-6 border-t border-gray-200"
            >
              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-violet-600 hover:bg-violet-700 text-white"
                  onClick={handleSave}
                >
                  Save Changes
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-violet-200 text-violet-700 hover:bg-violet-50"
                  onClick={handleReset}
                >
                  Reset to Default
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}