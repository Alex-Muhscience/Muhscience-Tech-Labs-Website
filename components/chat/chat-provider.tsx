"use client";

import { WhatsAppButton } from "./whatsapp-button";
import { LiveChatWidget } from "./live-chat-widget";

interface ChatProviderProps {
  whatsappNumber: string;
  whatsappMessage?: string;
  companyName?: string;
  welcomeMessage?: string;
  enableWhatsApp?: boolean;
  enableLiveChat?: boolean;
}

export function ChatProvider({
  whatsappNumber,
  whatsappMessage = "Hello! I'm interested in your services from your website.",
  companyName = "Muhscience Tech Labs",
  welcomeMessage = "Hi! How can we help you today?",
  enableWhatsApp = true,
  enableLiveChat = true
}: ChatProviderProps) {
  return (
    <>
      {enableWhatsApp && (
        <WhatsAppButton
          phoneNumber={whatsappNumber}
          message={whatsappMessage}
        />
      )}
      
      {enableLiveChat && (
        <LiveChatWidget
          companyName={companyName}
          welcomeMessage={welcomeMessage}
        />
      )}
    </>
  );
}
