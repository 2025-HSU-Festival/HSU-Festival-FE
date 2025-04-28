import React, { useState } from "react";
import styled from "styled-components";
import { StatusContainer } from "../../entities/Chatbot/StatusContainer";
import { ChatContainer } from "../../entities/Chatbot/ChatContainer";

export function Chatbot() {

  const [status, setStatus] = useState(2);

  return (
    <ChatbotWrap>
      <StatusContainer status = {status}/>
      <ChatContainer status = {status} setStatus={setStatus}/>
    </ChatbotWrap>
  )
}

export default Chatbot;


const ChatbotWrap = styled.div`
height: 100vh;
background-color: white;
`