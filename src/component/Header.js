import React from "react";
import styled from "styled-components";

// Створюємо компонент "Шапка"
export default function Header({ title }) {
  return (
    <Block>
      <Title>{title}</Title>
    </Block>
  );
}
// Елемент "Блок" який відповідає за відображення тексту компонента "Шапка"
const Block = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  border-bottom: solid #d7d7d7 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

// Елемент "Заголовок", який відповідає за відображення тексту компонента "Шапка" в змінній title
const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #111;
`;
