import { useState } from "react";
import Comments from "./components/Comments";
import useInsertComment from "./customHooks/useInsertComment";

export type Comment = {
  id: string;
  userName: string;
  image: string;
  like: number;
  comment: string;
  replies: {
    id: string;
    userName: string;
    taggedUserName?: string;
    image: string;
    like: number;
    comment: string;
  }[];
};
const comments: Comment[] = [
  {
    id: "1",
    userName: "samadhan",
    image: "https://via.placeholder.com/150/0000FF/808080?text=Samadhan",
    like: 5,
    comment: "Hello world",
    replies: [
      {
        id: "1.1",
        userName: "vishal",
        taggedUserName: "samadhan",
        image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Vishal",
        like: 3,
        comment: "Hello samadhan",
      },
      {
        id: "1.2",
        userName: "sagar",
        taggedUserName: "vishal",
        image: "https://via.placeholder.com/150/00FF00/000000?text=Sagar",
        like: 2,
        comment: "Hello vishal",
      },
    ],
  },
  {
    id: "2",
    userName: "john_doe",
    image: "https://via.placeholder.com/150/FFFF00/000000?text=John+Doe",
    like: 10,
    comment: "Hello everyone",
    replies: [
      {
        id: "2.1",
        userName: "jane_doe",
        taggedUserName: "john_doe",
        image: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Jane+Doe",
        like: 6,
        comment: "Hi John!",
      },
      {
        id: "2.2",
        userName: "samadhan",
        taggedUserName: "jane_doe",
        image: "https://via.placeholder.com/150/0000FF/808080?text=Samadhan",
        like: 4,
        comment: "Hello Jane",
      },
    ],
  },
  {
    id: "3",
    userName: "alice_wonder",
    image: "https://via.placeholder.com/150/800080/FFFFFF?text=Alice+Wonder",
    like: 8,
    comment: "Good morning!",
    replies: [
      {
        id: "3.1",
        userName: "bob_builder",
        taggedUserName: "alice_wonder",
        image: "https://via.placeholder.com/150/000080/FFFFFF?text=Bob+Builder",
        like: 3,
        comment: "Morning Alice!",
      },
      {
        id: "3.2",
        userName: "charlie_brown",
        taggedUserName: "bob_builder",
        image:
          "https://via.placeholder.com/150/008080/FFFFFF?text=Charlie+Brown",
        like: 5,
        comment: "Hey Bob!",
      },
      {
        id: "3.3",
        userName: "charlie_brown",
        taggedUserName: "samadhan",
        image:
          "https://via.placeholder.com/150/008080/FFFFFF?text=Charlie+Brown",
        like: 5,
        comment: "Hey samadhan!",
      },
    ],
  },
];
const InstagramComments = () => {
  const { addComment } = useInsertComment();
  const handleAddComment = (value: string, id: string) => {
   console.log( addComment(comments, id, value))
  };
  return (
    <div>
      <Comments comments={comments} handleAddComment={handleAddComment} />
    </div>
  );
};

export default InstagramComments;
