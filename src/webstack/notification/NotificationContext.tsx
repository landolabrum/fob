// context/NotificationContext.tsx
import React, { createContext, useContext, useState, useCallback } from 'react';
import "./NotificationContext.scss";
type NotificationContextType = {
  openNotification: (content: React.ReactNode) => void;
  closeNotification: () => void;
};

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotification must be used within a NotificationProvider');
  return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<React.ReactNode | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openNotification = useCallback((node: React.ReactNode) => {
    setContent(node);
    setIsOpen(true);
  }, []);

  const closeNotification = useCallback(() => {
    setIsOpen(false);
    setContent(null);
  }, []);

  return (
    <NotificationContext.Provider value={{ openNotification, closeNotification }}>
      {children}
      {isOpen && (
        <div className="Notification-backdrop" onClick={closeNotification}>
          <div id="Notification" className="Notification-content" onClick={(e) => e.stopPropagation()}>
            {content}
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
};