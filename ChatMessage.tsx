import React from 'react';
import { ChatMessage as ChatMessageType } from '../../types';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  // Format timestamp
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(message.timestamp);

  return (
    <div className={`flex mb-4 ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
          isBot ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3' : 
          'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 ml-3'
        }`}>
          {isBot ? <Bot size={20} /> : <User size={20} />}
        </div>
        <div>
          <div className={`py-3 px-4 rounded-lg ${
            isBot ? 
            'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200' : 
            'bg-blue-600 dark:bg-blue-700 text-white'
          }`}>
            {isBot ? (
              <div className="whitespace-pre-line">{message.text}</div>
            ) : (
              <p>{message.text}</p>
            )}
          </div>
          <div className={`text-xs mt-1 text-gray-500 ${isBot ? 'text-left' : 'text-right'}`}>
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;