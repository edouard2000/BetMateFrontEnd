import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const UnreadMessageContext = createContext();

export const UnreadMessageProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(0);
  useEffect(() => {
    const fetchUnreadCount = async () => {
      try {
        const userId = '66768003bc6550fbf2a04d06'; // replace with actual userId
        const response = await axios.get(`https://betmatebackend.onrender.com/api/general-chat/get-unreadcount/${userId}`);
        // const response = await axios.get(`http://172.20.10.3:5001/api/general-chat/get-unreadcount/${userId}`);
        setUnreadCount(response.data.data.unreadCount);
      } catch (error) {
        console.error('Failed to fetch unread messages count:', error);
      }
    };

    fetchUnreadCount();
  }, []);

  return (
    <UnreadMessageContext.Provider value={{ unreadCount, setUnreadCount }}>
      {children}
    </UnreadMessageContext.Provider>
  );
};

export const useUnreadMessage = () => useContext(UnreadMessageContext);