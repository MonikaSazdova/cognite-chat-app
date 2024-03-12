import Sidebar from '../components/Sidebar/Sidebar';
import ContactsList from '../components/ContactsList/ContactsList';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import { useData } from '../context/DataContext';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setDefaultChats } from '../store/actions/chatActions';


function ChatPage() {
  const chats = useData().chats;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDefaultChats(chats))
  }, [chats, dispatch])

  return (
    <div className="flex h-full pt-16">
      <div className="hidden sm:flex w-16 flex-none">
        <Sidebar />
      </div>
      <div className="flex w-full flex-grow overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
        <ContactsList />
        <ChatWindow />
      </div>
    </div>
  );
}

export default ChatPage;