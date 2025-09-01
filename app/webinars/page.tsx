'use client';

import React, { useState } from 'react';
import { webinars, Webinar } from '../../lib/webinar-data';
import WebinarCard from '../../components/WebinarCard';
import WebinarRegistrationModal from '../../components/WebinarRegistrationModal';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, Video } from 'lucide-react';

const WebinarsPage: React.FC = () => {
  const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (webinar: Webinar) => {
    setSelectedWebinar(webinar);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedWebinar(null);
    setIsModalOpen(false);
  };

  return (
    <main className="flex-1">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          {/* Hero Section */}
          <motion.section 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Upcoming Webinars
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Join our expert-led webinars to stay ahead of the curve in cybersecurity, AI, and technology trends.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Video className="h-4 w-4 text-primary" />
                  <span>Live Interactive Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Expert Speakers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Free Registration</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Webinars Grid */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <WebinarCard 
                    webinar={webinar} 
                    onRegister={openModal}
                  />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Empty State */}
          {webinars.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Upcoming Webinars</h3>
              <p className="text-muted-foreground mb-6">Check back soon for new sessions!</p>
            </motion.div>
          )}
        </div>
      <WebinarRegistrationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        webinar={selectedWebinar}
      />
    </main>
  );
};

export default WebinarsPage;

