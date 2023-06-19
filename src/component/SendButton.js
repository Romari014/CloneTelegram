import React from "react";
import styled from "styled-components";

import { ReactComponent as SendIcon } from "../file/dialog/send.svg";

export default function SendButton({ onClick }) {
  return (
    <SendButtonTag onClick={onClick}>
      <SendIcon />
    </SendButtonTag>
  );
}

const SendButtonTag = styled.div`
  height: 32px;
  width: 32px;
  & > svg {
    height: 16px;
    width: 16px;
  }
  border-radius: 50%;
  background-color: #007aff;
  transition: opacity 0.7s;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
