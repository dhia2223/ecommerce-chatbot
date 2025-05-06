// import React, { useState, useRef, useEffect } from 'react';
// import { X, Send, Bot, User } from 'lucide-react';

// const ChatbotWindow = ({ isOpen, onClose }) => {
//   const [messages, setMessages] = useState(() => {
//     // Load saved chat from localStorage
//     const saved = localStorage.getItem('chatMessages');
//     return saved ? JSON.parse(saved) : [{ from: 'bot', text: 'Hello! How can I help you today?' }];
//   });
//   const [input, setInput] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (isOpen && messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [messages, isOpen]);

//   useEffect(() => {
//     // Save chat to localStorage on every change
//     localStorage.setItem('chatMessages', JSON.stringify(messages));
//   }, [messages]);

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { from: 'user', text: input }];
//     setMessages(newMessages);
//     setInput('');
//     setIsTyping(true);

//     // Simulate bot typing
//     setTimeout(() => {
//       setMessages(prev => [...prev, { from: 'bot', text: 'Thanks for your message! How else can I assist?' }]);
//       setIsTyping(false);
//     }, 1200);
//   };

//   return (
//     <div
//       className={`fixed bottom-20 right-5 w-80 max-w-full bg-white dark:bg-four rounded-xl shadow-lg border dark:border-gray-700 flex flex-col overflow-hidden transition-all duration-300 ${
//         isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
//       } origin-bottom-right`}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between bg-primary text-white p-3">
//         <h2 className="text-lg font-semibold">Chat Support</h2>
//         <button onClick={onClose}>
//           <X className="w-5 h-5" />
//         </button>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-100 dark:bg-four">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`flex items-end gap-2 ${
//               msg.from === 'user' ? 'justify-end' : 'justify-start'
//             }`}
//           >
//             {msg.from === 'bot' && (
//               <div className="bg-primary p-1 rounded-full">
//                 <Bot className="w-4 h-4 text-white" />
//               </div>
//             )}
//             <div
//               className={`max-w-[70%] px-3 py-2 rounded-lg text-sm ${
//                 msg.from === 'user'
//                   ? 'bg-primary text-white'
//                   : 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white'
//               }`}
//             >
//               {msg.text}
//             </div>
//             {msg.from === 'user' && (
//               <div className="bg-primary p-1 rounded-full">
//                 <User className="w-4 h-4 text-white" />
//               </div>
//             )}
//           </div>
//         ))}

//         {isTyping && (
//           <div className="flex items-center gap-2 mt-2">
//             <div className="bg-primary p-1 rounded-full">
//               <Bot className="w-4 h-4 text-white" />
//             </div>
//             <div className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">Chatbot is typing...</div>
//           </div>
//         )}

//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input */}
//       <div className="flex p-2 border-t dark:border-gray-700 bg-white dark:bg-four">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           type="text"
//           placeholder="Type your message..."
//           className="flex-1 p-2 rounded-lg border dark:border-gray-600 bg-gray-100 dark:bg-four focus:outline-none"
//         />
//         <button
//           onClick={handleSend}
//           className="bg-primary text-white p-2 ml-2 rounded-lg hover:bg-secondary transition"
//         >
//           <Send className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatbotWindow;




// import React from 'react';
// import { X } from 'lucide-react';

// const ChatbotWindow = ({ isOpen, onClose }) => {
//   return (
//     <div
//       className={`fixed bottom-20 right-5 w-80 max-w-full h-[500px] bg-white dark:bg-four rounded-xl shadow-lg border dark:border-gray-700 flex flex-col overflow-hidden transition-all duration-300 ${
//         isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
//       } origin-bottom-right`}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between bg-primary text-white p-3">
//         <h2 className="text-lg font-semibold">E-Commerce Support</h2>
//         <button onClick={onClose}>
//           <X className="w-5 h-5" />
//         </button>
//       </div>

//       {/* Copilot iframe */}
//       <div className="flex-1">
//         <iframe
//           src="https://copilotstudio.microsoft.com/environments/Default-dbd6664d-4eb9-46eb-99d8-5c43ba153c61/bots/cr4d9_eCommerceSupportBot/webchat?__version__=2"
//           frameBorder="0"
//           title="Ecommerce Support Chatbot"
//           className="w-full h-full"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default ChatbotWindow;




