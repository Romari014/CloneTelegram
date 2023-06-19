import React from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Page from "../component/Page";
import Empty from "../component/Empty";
import ChatList from "../component/ChatList";

// ============================================
// Імпортуємо файли потрібних картинок

import CatPhoto from "../file/photo/cat.png";
import News60 from "../file/photo/60-news.png";
import Skirts from "../file/photo/skirts.png";
import Drank from "../file/photo/drank.png";
// ============================================
// Генеруємо константи, в яких тримаємо дані про список чатів

const CHATS_LIST = [
  {
    id: 1,
    photo: CatPhoto,
    name: "Про котів",
    message: "Я люблю пити молоко",
    isUnread: true,
    time: "00:45"
  },
  {
    id: 2,
    photo: News60,
    name: "60 News",
    message: "Breaking news!",
    isRead: true,
    time: "09:10"
  },
  {
    id: 3,
    photo: Skirts,
    name: "Cloth",
    message: "New product aviable now",
    messageAmount: 10,
    time: "18:45",
    hashtag: '#Cloth'
  },
  {
    id: 4,
    photo: Drank,
    name: "David",
    message: "I`m drunk!",
    messageAmount: 100,
    notifyOff: true,
    time: "08:45",
    user: "David"
  },
];

// ============================================
// Генеруємо сторінку "Чати"

export default function Chats() {
  return (
    <Page>
      <Header title="Чати" />
      <div>
        <ChatList list={CHATS_LIST}/>
        {/* <Empty>Список чатів пустий</Empty> */}
      </div>
      <Menu activePage="/chats" />
    </Page>
  );
}
