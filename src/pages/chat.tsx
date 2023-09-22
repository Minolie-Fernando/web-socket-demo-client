import React from "react";
import { ChatLayout } from "../components/chat.layout";

const Chat = () => {
  return (
    <>
      <ChatLayout>
        <div>Chatgggg</div>
      </ChatLayout>
    </>
  );
};

export const loader = async () => {
  const user = "";
  return {
    user: user,
    // roomName
  };
};

export default Chat;
