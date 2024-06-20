import React from "react";
import "./list.css";
import UserInfo from "./userInfo/userInfo.jsx";
import ChatList from "./chatList/chatList.jsx";

const List = () => {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
