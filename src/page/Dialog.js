import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Page from "../component/Page";
import Empty from "../component/Empty";
import MessageList from "../component/MessageList"

const MESSAGE_LIST = [
  {
    id: 1,
    message: "Привіт. Як справи?",
    isMe: true,
    time: "11:30",
  },
  {
    id: 2,
    message: "Все добре. В тебе як?",
    isMe: false,
    time: "11:32",
  }
];

export default function Dialog() {
  return (
    <Page>
      {/* В title передаємо текст заголовка сторінки */}
      <Header title="Діалог чату" />
      <DialogView>
        <MessageList list={MESSAGE_LIST}></MessageList>
      </DialogView>
      <Menu />
    </Page>
  );
}

// Відповідає за коректне відображення основного вмісту Діалогу
const DialogView = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

// Відповідає за коректне відображення вмісту компонента "Поле вводу" та "Кнопка відправити"
const SendMessageBlock = styled.div`
  background-color: #f6f6f6;
  padding: 15px;
  border-top: 1px #d7d7d7 solid;
  display: grid;
  grid-template-columns: 1fr 32px;
  gap: 15px;
`;
