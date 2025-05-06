// import React from "react";

// function ChatbotWidget() {
//   return (
//     <div className="fixed bottom-4 right-4 w-80 h-96 shadow-lg rounded-xl overflow-hidden">
//       <iframe
//         src="https://copilotstudio.microsoft.com/environments/Default-dbd6664d-4eb9-46eb-99d8-5c43ba153c61/bots/cr4d9_eCommerceSupportBot/webchat?__version__=2"
//         frameBorder="0"
//         style={{ width: "100%", height: "100%" }}
//         title="E-Commerce Support Chat"
//       ></iframe>
//     </div>
//   );
// }

// export default ChatbotWidget;

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react'; // Optional: icon library like lucide-react

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat iframe */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 h-[600px] bg-white border border-gray-300 rounded-xl shadow-xl overflow-hidden">
          <iframe
            src="https://copilotstudio.microsoft.com/environments/Default-dbd6664d-4eb9-46eb-99d8-5c43ba153c61/bots/cr4d9_eCommerceSupportBot/webchat?__version__=2"
            frameBorder="0"
            className="w-full h-full"
            title="Ecommerce Support Chatbot"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
