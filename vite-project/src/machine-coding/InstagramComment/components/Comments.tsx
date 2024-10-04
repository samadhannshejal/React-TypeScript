import React, { useState } from "react";
import SingleComment from "./SingleComment";
export interface CommentProps {
  id: string;
  userName: string;
  image: string;
  like: number;
  comment: string;
  taggedUserName?: string;
  replies: CommentProps[];
}

interface CommentsProps {
  comments: CommentProps[];
}

const Comments: React.FC<CommentsProps> = ({ comments,handleAddComment }) => {
  // const [showReply, setShowReply] = useState(false);
  // console.log(showReply);

  return (
    <div>
      {comments?.map((comment, idx) => (
        <>
          <SingleComment
            key={idx}
            comment={comment}
            handleAddComment={handleAddComment}
          />
          {/* {comment.replies.length > 0 && (
            <p
              onClick={() => setShowReply(!showReply)}
              style={{ cursor: "pointer" }}
            >
              show {comment.replies.length} more replies
            </p>
          )} */}

          <div style={{ marginLeft: "50px" }}>
            <Comments
              key={idx}
              comments={comment.replies}
              handleAddComment={handleAddComment}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default Comments;
