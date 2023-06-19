import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as SettingsIcon } from "../file/menu/settings.svg";
import { ReactComponent as ChatsIcon } from "../file/menu/groups.svg";

// Створюємо константу, в які буде знаходитись дані нашого меню
// id - це ідентифікатор опції, технічна змінна
// text - це текст для назви нашої кнопки в меню
// Image - туди кладемо іконку, яку до цього імпортували в наш файл коду
// path - туди ми вказуємо посилання на сторінку, яке до цього вказували в файлі App.js

const MENU_LIST = [
  { id: 1, text: "Чати", Image: ChatsIcon, path: "/chats" },
  { id: 2, text: "Налаштування", Image: SettingsIcon, path: "/settings" }
];

// Створюємо компонент "Меню"
// activePage - змінна, в яку ми передали посилання на активну сторінку
export default function Menu({ activePage }) {
  return (
    <Block>
      {MENU_LIST.map(({ id, text, Image, path }) => (
        <React.Fragment key={id}>
          <Link to={path}>
            <MenuItem isActive={activePage === path}>
              <Icon>
                <Image />
              </Icon>
              <Text>{text}</Text>
            </MenuItem>
          </Link>
        </React.Fragment>
      ))}
    </Block>
  );
}

// Елемент "Блок", який відповідає за відображення кнопок в меню
const Block = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  border-top: solid #d7d7d7 1px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
`;

// Створюємо елемент "Text", який відповідає за текст кнопки в меню
const Text = styled.span`
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #8d8d8f;
`;

// Створюємо елемент "Іконка" для картинки кнопки
const Icon = styled.div`
  & > svg {
    height: 26px;
    width: 26px;
  }
  display: flex;
`;

// Елемент "Один елемент меню" відповідає за іконку та за текст назви сторінки в списку меню
const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  ${({ isActive }) => {
    if (isActive === true) {
      return css`
        ${Text} {
          color: #037ee5;
        }
        ${Icon} > svg {
          fill: #037ee5;
        }
      `;
    }
  }}
`;
