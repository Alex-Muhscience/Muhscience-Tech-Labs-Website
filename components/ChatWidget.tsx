'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChatContext } from '../contexts/ChatContext';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const {
    isOpen,
    setIsOpen,
    messages,
    sendMessage,
    startChat,
    isConnected,
  } = useChatContext();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (isConnected && !isOpen) {
      startChat({ name: 'Guest' });
    }
  }, [isConnected]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="h-14 w-14 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-card/80 backdrop-blur-md border border-border/50 shadow-2xl rounded-xl overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <h4 className="font-semibold text-lg mb-1">Live Chat Support</h4>
              <p className="text-sm opacity-90">We're here to help!</p>
            </div>

            <div className="p-4 h-80 overflow-y-auto bg-muted/5">
              {messages.length === 0 ? (
                <div className="text-center text-muted-foreground py-8">
                  <MessageCircle className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">Start a conversation with our support team</p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className={
                    `mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`
                  }>
                    <div className={
                      `inline-block max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                        msg.sender === 'user' 
                          ? 'bg-primary text-primary-foreground ml-auto' 
                          : 'bg-card/60 backdrop-blur border border-border/30 text-card-foreground'
                      }`
                    }>
                      <div className="text-sm leading-relaxed">{msg.message}</div>
                      <div className={
                        `text-xs mt-2 opacity-70 ${
                          msg.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`
                      }>
                        {msg.senderName} • {new Date(msg.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef}></div>
            </div>

            <div className="p-4 border-t border-border/30 bg-card/50">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleSendMessage();
                  }}
                  className="flex-1 px-4 py-2 bg-background/60 backdrop-blur border border-input/50 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-muted-foreground"
                  placeholder="Type your message..."
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
