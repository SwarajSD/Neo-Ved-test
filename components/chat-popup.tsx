"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";

export const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col">
          <div className="p-3 border-b border-gray-700 flex justify-between items-center">
            <h3 className="font-bold text-white">Live Chat</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={18} />
            </Button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="text-sm text-gray-300">
              {/* Chat messages or a chat interface */}
              <p>Welcome! How can we help you?</p>
            </div>
          </div>
          <div className="p-3 border-t border-gray-700">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 p-0 bg-blue-600 hover:bg-blue-700"
        >
          <MessageSquare size={20} />
        </Button>
      )}
    </div>
  );
};