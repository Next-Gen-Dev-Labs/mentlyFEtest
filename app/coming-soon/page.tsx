'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket, ArrowLeft } from 'lucide-react';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';

export default function ComingSoon() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center justify-center mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#6F01D0]/10 rounded-full blur-lg"></div>
                  <div className="relative bg-gradient-to-br from-[#6F01D0] to-[#9A1FFE] p-6 rounded-full">
                    <Rocket className="h-12 w-12 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                Feature <span className="text-[#6F01D0]">Coming</span> Soon!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                We're working hard to bring you an amazing experience. This feature is currently in development and will be available shortly.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Button 
                  asChild
                  className="bg-[#6F01D0] hover:bg-[#7E1BDF] px-6 py-3 rounded-full transition-all"
                >
                  <Link href="/" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Return to Dashboard
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12"
              >
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-full shadow-sm">
                  <div className="flex space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          delay: i * 0.2,
                        }}
                        className="h-2 w-2 bg-[#6F01D0] rounded-full"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Development in progress
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}