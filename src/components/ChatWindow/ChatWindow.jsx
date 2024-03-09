import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowBody from "./ChatWindowBody";
import TypeField from "./TypeField";

function ChatWindow() {
  const messages = [
    { text: "Hi there!", timestamp: "09:00", isUser: false },
    { text: "Hello! How are you?", timestamp: "09:01", isUser: true },
    { text: "Hello! How are you?", timestamp: "09:01", isUser: true },
    { text: "Hello! How are you? This is a longer test message. Let's see how it will look. Let's make it even longer!", timestamp: "09:01", isUser: true },
    { text: "Hi there! This is another long message. Let's see how it will look.", timestamp: "09:00", isUser: false },
    { text: "Hello! How are you?", timestamp: "09:01", isUser: true },
    { text: "Hi there!", timestamp: "09:00", isUser: false },
    { text: "Hello! How are you?", timestamp: "09:01", isUser: true },
  ];
  return (
    <div className="w-2/3 bg-gray-400 flex flex-col">
      <ChatWindowHeader name="Jon" surname="Doe" />
      <ChatWindowBody messages={messages}/>
      <TypeField />
    </div>
  )

}

export default ChatWindow;