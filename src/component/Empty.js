import styled from "styled-components";

// Компонент який відповідає за текст, коли список пустий
export default function Empty({ children }) {
  return <Text>{children}</Text>;
}

// Елемент "Текст" для пустого тексту
const Text = styled.div`
  color: #111;
  font-size: 16px;
  padding: 15px;
  display: flex;
  justify-content: center;
`;
