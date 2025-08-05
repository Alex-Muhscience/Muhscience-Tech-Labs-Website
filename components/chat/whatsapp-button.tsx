"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

export function WhatsAppButton({ 
  phoneNumber, 
  message = "Hello! I'm interested in your services.", 
  className = "" 
}: WhatsAppButtonProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsTooltipVisible(true)}
        onHoverEnd={() => setIsTooltipVisible(false)}
      >
        <Button
          onClick={handleWhatsAppClick}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 p-0 shadow-lg hover:bg-green-600 focus:bg-green-600"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="fixed bottom-16 right-20 z-50 rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-lg"
          >
            Chat with us on WhatsApp
            <div className="absolute -bottom-1 -right-1 h-2 w-2 rotate-45 bg-gray-900"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
