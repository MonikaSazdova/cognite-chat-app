import Sidebar from '../components/Sidebar/Sidebar';
import ContactsList from '../components/ContactsList/ContactsList';
import ChatWindow from '../components/ChatWindow/ChatWindow';

function ChatPage() {
  return (
    <div className="flex h-full pt-16">
      <div className="w-16 flex-none">
        <Sidebar />
      </div>
      <div className="flex w-full flex-grow" style={{ height: 'calc(100vh - 64px)' }}>
        <ContactsList />
        <ChatWindow />
      </div>
    </div>
  );
}

export default ChatPage;