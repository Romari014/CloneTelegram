import React from "react";
import styled from "styled-components";

export default function OptionList({ list }) {
  return <List>{list.map(OptionItem)}</List>;
}

// Елемент "Cписок" який відповідає за відображення списку опцій
const List = styled.div`
  background-color: #fff;
  display: grid;
  border-top: solid #d7d7d7 1px;
  border-bottom: solid #d7d7d7 1px;
`;

// Генеруємо компонент "Одна Опція", в якому ми отримуємо дані однієї опції та виводимо їх
function OptionItem({ Image, title, id }) {
  return (
    <React.Fragment key={id}>
      <Item>
        <Icon>
          <Image />
        </Icon>
        <Title>{title}</Title>
      </Item>
    </React.Fragment>
  );
}

// Елемент "Іконка" для картинки опції
const Icon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

// Елемент "Заголовок" для тексту опції
const Title = styled.div`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #111;
`;

// Елемент "Один елемент опції", який відповідає за відображення
// елемента "Заголовок" та "Іконка" для компонент "Одна опція"
const Item = styled.div`
  display: flex;
  align-items: stretch;
  padding-left: 16px;
  padding-right: 16px;
  &:not(:last-of-type) > ${Title} {
    border-bottom: 1px solid #d7d7d7;
  }
  transition: opacity 0.7s;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
