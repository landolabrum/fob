// context/ModalContext.tsx
import React, { createContext, useContext, useState, useCallback } from 'react';
import "./ModalContext.scss";
type ModalContextType = {
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
};

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<React.ReactNode | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback((node: React.ReactNode) => {
    setContent(node);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setContent(null);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div id="modal" className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div  className="modal-content-close" onClick={closeModal}>x</div>
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};