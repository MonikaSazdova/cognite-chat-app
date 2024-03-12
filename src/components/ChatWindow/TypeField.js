import { useState } from "react";
import { adjustTextareaHeight } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { addMessageToChat } from "../../store/actions/chatActions";
import useLoggedUser from "../../hooks/useLoggedUser";
import { v4 as uuidv4 } from "uuid";
import useSelectedChat from "../../hooks/useSelectedChat";
import useSelectedContact from "../../hooks/useSelectedContact";
import { scripts } from "../../constants/chatScripts";
import { findAutomatedResponse } from "../../utils/utils";

function TypeField() {
  const loggedUser = useLoggedUser();
  const [messageText, setMessageText] = useState("");
  const dispatch = useDispatch();
  const selectedContact = useSelectedContact();
  const selectedChat = useSelectedChat(selectedContact);
  const currentChatId = selectedChat.chatId;

const sendAutomatedResponse = () => {
  const response = findAutomatedResponse(messageText, scripts);
  setTimeout(() => {
    const newMessage = {
      msgId: uuidv4(),
      text: response,
      timestamp: new Date().toISOString(),
      userId: selectedContact.userId,
    };
    dispatch(addMessageToChat(currentChatId, newMessage));
  }, 3000);
  };

  const handleInputChange = (e) => setMessageText(e.target.value);

  const handleOnSend = () => {
    if (messageText.trim() !== "") {
      const newMessage = {
        msgId: uuidv4(),
        text: messageText.trim(),
        timestamp: new Date().toISOString(),
        userId: loggedUser.userId,
      };
      dispatch(addMessageToChat(currentChatId, newMessage));
      setMessageText("");
      sendAutomatedResponse();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleOnSend();
    }
  };

  return (
    <div className="w-full max-h-52 flex-shrink-0 bg-white pl-10 pr-14 py-3 pt-4 items-center flex flex-row justify-between border-y border-gray-300">
      <textarea
        placeholder="Type a message"
        className="resize-none w-full bg-transparent border-none placeholder-gray-500 focus:ring-0 focus:border-none focus:outline-none mr-4"
        style={{ textAlign: "left", overflowY: "hidden" }}
        value={messageText}
        onChange={handleInputChange}
        onInput={adjustTextareaHeight}
        onKeyDown={handleKeyPress}
      ></textarea>
      <button
        className="w-20 h-8 bg-blue-600 rounded-lg text-white"
        onClick={handleOnSend}
      >
        Send
      </button>
    </div>
  );
}

export default TypeField;
