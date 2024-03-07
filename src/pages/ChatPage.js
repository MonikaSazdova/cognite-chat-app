import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import ContactsList from '../components/ContactsList/ContactsList';
import ChatWindow from '../components/ChatWindow/ChatWindow';

function ChatPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex w-full" style={{ height: 'calc(100vh - 60px)' }}>
        <ContactsList />
        <ChatWindow />
      </div>
    </div>
  );
}

export default ChatPage;