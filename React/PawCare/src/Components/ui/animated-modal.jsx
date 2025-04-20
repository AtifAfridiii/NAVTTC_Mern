import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      {React.Children.map(children, child =>
        React.cloneElement(child, { isOpen, setIsOpen })
      )}
    </div>
  );
};

export const ModalTrigger = ({ children, className, isOpen, setIsOpen }) => {
  return (
    <button
      className={`relative px-4 py-2 rounded-xl overflow-hidden ${className}`}
      onClick={() => setIsOpen(true)}
    >
      {children}
    </button>
  );
};

export const ModalBody = ({ children, isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden relative z-50 max-w-lg w-full"
          >
            {React.Children.map(children, child =>
              React.cloneElement(child, { setIsOpen })
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ModalContent = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

export const ModalFooter = ({ children, className, setIsOpen }) => {
  return (
    <div className={`p-4 bg-gray-50 dark:bg-neutral-800 flex justify-end ${className}`}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          onClick: () => {
            setIsOpen(false);
            child.props.onClick?.();
          },
        })
      )}
    </div>
  );
};