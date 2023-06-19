import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as UnreadIcon } from "../file/chat/unread.svg";
import { ReactComponent as ReadIcon } from "../file/chat/read.svg";

export default function ChatList({ list }) {
  return <List>{list.map(ChatItem)}</List>;
}
// Створюємо елемент "Cписок", який відповідає за секцію списку чатів
const List = styled.div`
  background-color: #fff;
  display: grid;
  border-top: solid #d7d7d7 1px;
  border-bottom: solid #d7d7d7 1px;
`;

// Генеруємо компонент "Один Чат", в якому ми отримуємо дані одного чату та виводимо їх
function ChatItem({
  photo,
  message,
  name,
  id,

  messageAmount,
  notifyOff,
  isUnread,
  isRead,
  time,
  user,
  hashtag
}) {
  return (
    <React.Fragment key={id}>
      <Item>
        <Image src={photo} />
        <Content>
          <Row>
            <InfoColumn>
              <Name>{name}</Name>
              <User>{user}</User>
              <Message>{message}</Message>
              {hashtag && (
                <Hashtag>
                  {hashtag}
                </Hashtag>
              )}
            </InfoColumn>
            <StatusColumn>
              <Time>
                {time}
              </Time>
              {messageAmount && (
                <MessageAmount notifyOff={notifyOff}>
                  {messageAmount}
                </MessageAmount>
              )}

              {isUnread && (
                <Icon>
                  <UnreadIcon />
                </Icon>
              )}
              {isRead && (
                <Icon>
                  <ReadIcon />
                </Icon>
              )}
            </StatusColumn>
          </Row>
        </Content>
      </Item>
    </React.Fragment>
  );
}
// Елемент "Повідомлення"
const Message = styled.div`
  font-size: 14px; 
  color: #8e8e93; 
`;

const User = styled.div`
  font-size: 14px; 
  color: #111; 
`;

const Hashtag = styled.div`
  font-size: 14px; 
  color: #037ee5; 
`;
// Елемент "Ім'я чату"
const Name = styled.div`
  font-size: 16px; 
  color: #111;
`;

// Елемент "Час"
const Time = styled.div`
  font-size: 14px;
  color: #8e8e93;
`;

// Елемент "Іконка"
const Icon = styled.div`
  height: 24px;
  width: 24px; 

  & > svg {
    height: 24px;
    width: 24px; 
  }
`;

// Елемент "Скільки непрочитаних повідомлень"
const MessageAmount = styled.div`
  font-size: 12px; 
  color: #fff; 
  background-color: #037ee5; 
  padding: 2px 10px; 
  border-radius: 25px; 

  ${({ notifyOff }) => {
    if (notifyOff === true) {
      return css`
        background-color: #8e8e93;
      `;
    }
  }}
`;
// Далі йдуть елементи, які відповідають за відображення даних одного чату в потрібній структурі
// Елемент колонки статусів
const StatusColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
// Елементи колонки з головної інформації
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
// Елемент, який відповідає за рядок, в якому виводять колонки
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

// Елемент "Картинка" чату
const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 50%;
`;

// Елемент "Контент", в якому знаходяться основні дані про чат
const Content = styled.div`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

// Елемент "Один чат", який відповідає за відображення карточки одного чату
const Item = styled.div`
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  &:not(:last-of-type) > ${Content} {
    border-bottom: 1px solid #d7d7d7;
  }
  transition: opacity 0.7s;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
