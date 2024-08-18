import { useEffect, useState, useRef } from "react";
import ChatCard from "./ChatCard";

const ChatUI = () => {
  const [chatData, setChatData] = useState([]);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatData]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchData = () => {
    // Simulate fetching new data and appending it
    const newChats = [
      {
        userName: "john_doe",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        comment: "Hey, what's up?",
        id: "2",
      },
      {
        userName: "jane_smith",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        comment: "Just finished my work, feeling great!",
        id: "3",
      },
      {
        userName: "alice_brown",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        comment: "Looking forward to the weekend!",
        id: "4",
      },
      {
        userName: "mike_jones",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        comment: "Let's catch up later.",
        id: "5",
      },
      {
        userName: "emma_white",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        comment: "Just had the best coffee ever.",
        id: "6",
      },
    ];

    setChatData((previousData) => {
      const newData = [...newChats, ...previousData];
      return newData;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          height: "600px",
          border: "1px solid black",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        {chatData.map((chat, idx) => (
          <ChatCard key={idx} {...chat} />
        ))}
        <div ref={chatEndRef} />
      </div>
      <input
        type="text"
        placeholder="Please Message"
        style={{ height: "30px" }}
      />
    </div>
  );
};

export default ChatUI;
