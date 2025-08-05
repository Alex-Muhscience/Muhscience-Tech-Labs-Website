'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// Temporarily removed socket.io import to isolate webpack error
// import { io, Socket } from 'socket.io-client';

export interface ChatMessage {
  id: string;
  message: string;
  sender: 'user' | 'support';
  timestamp: Date;
  senderName?: string;
  senderAvatar?: string;
}

export interface ChatSession {
  id: string;
  userId: string;
  userEmail?: string;
  userName?: string;
  status: 'active' | 'waiting' | 'ended';
  messages: ChatMessage[];
  createdAt: Date;
  assignedAgent?: string;
}

interface ChatContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messages: ChatMessage[];
  currentSession: ChatSession | null;
  isConnected: boolean;
  isTyping: boolean;
  sendMessage: (message: string) => void;
  startChat: (userInfo: { name?: string; email?: string }) => void;
  endChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null);
  const [socket, setSocket] = useState<any | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Initialize socket connection
  useEffect(() => {
    try {
      // For development, we'll simulate the socket connection
      // In production, replace with actual Socket.IO server
      const mockSocket = {
        connected: true,
        on: (event: string, callback: Function) => {
          try {
            // Mock event handlers
            if (event === 'connect') {
              setTimeout(() => {
                try {
                  callback();
                } catch (error) {
                  console.error('Socket callback error:', error);
                }
              }, 100);
            }
          } catch (error) {
            console.error('Socket event handler error:', error);
          }
        },
        emit: (event: string, data: any) => {
          try {
            // Mock emit for sending messages
            if (event === 'send_message') {
              // Simulate auto-response from support
              setTimeout(() => {
                try {
                  const autoResponse: ChatMessage = {
                    id: `msg-${Date.now()}`,
                    message: "Thanks for reaching out! A support agent will be with you shortly. How can we help you today?",
                    sender: 'support',
                    timestamp: new Date(),
                    senderName: 'Support Team',
                    senderAvatar: '/images/avatars/support-team.svg'
                  };
                  setMessages(prev => [...prev, autoResponse]);
                } catch (error) {
                  console.error('Auto-response error:', error);
                }
              }, 1000);
            }
          } catch (error) {
            console.error('Socket emit error:', error);
          }
        },
        disconnect: () => {
          try {
            // Mock disconnect
          } catch (error) {
            console.error('Socket disconnect error:', error);
          }
        }
      } as any;

      setSocket(mockSocket);
      setIsConnected(true);

      return () => {
        try {
          if (socket) {
            socket.disconnect();
          }
        } catch (error) {
          console.error('Socket cleanup error:', error);
        }
      };
    } catch (error) {
      console.error('Socket initialization error:', error);
      // Set a minimal fallback state
      setIsConnected(false);
    }
  }, []);

  const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const sendMessage = (message: string) => {
    if (!message.trim() || !currentSession) return;

    const newMessage: ChatMessage = {
      id: generateId(),
      message: message.trim(),
      sender: 'user',
      timestamp: new Date(),
      senderName: currentSession.userName || 'You'
    };

    setMessages(prev => [...prev, newMessage]);

    // Send to socket server
    if (socket) {
      socket.emit('send_message', {
        sessionId: currentSession.id,
        message: newMessage
      });
    }
  };

  const startChat = (userInfo: { name?: string; email?: string }) => {
    const newSession: ChatSession = {
      id: generateId(),
      userId: generateId(),
      userEmail: userInfo.email,
      userName: userInfo.name,
      status: 'active',
      messages: [],
      createdAt: new Date()
    };

    setCurrentSession(newSession);
    setMessages([]);
    setIsOpen(true);

    // Welcome message
    const welcomeMessage: ChatMessage = {
      id: generateId(),
      message: `Hi ${userInfo.name || 'there'}! Welcome to Muhscience Tech Labs support. How can we assist you today?`,
      sender: 'support',
      timestamp: new Date(),
      senderName: 'Support Team',
      senderAvatar: '/images/avatars/support-team.svg'
    };

    setTimeout(() => {
      setMessages([welcomeMessage]);
    }, 500);
  };

  const endChat = () => {
    if (currentSession) {
      setCurrentSession(prev => prev ? { ...prev, status: 'ended' } : null);
    }
    setMessages([]);
    setIsOpen(false);
    
    if (socket) {
      socket.emit('end_chat', { sessionId: currentSession?.id });
    }
  };

  return (
    <ChatContext.Provider
      value={{
        isOpen,
        setIsOpen,
        messages,
        currentSession,
        isConnected,
        isTyping,
        sendMessage,
        startChat,
        endChat
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
