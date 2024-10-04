import { useState } from "react";
import { CommentProps } from "./Comments";
import { CiHeart } from "react-icons/ci";

const SingleComment = ({
  comment,
  handleAddComment,
}: {
  comment: CommentProps;
  handleAddComment: (value: string, id: string) => void;
}) => {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && e.currentTarget.value) {
      handleAddComment(e.currentTarget.value, comment.id);

      setIsInputVisible(false);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={comment.image}
          alt={comment.userName}
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <p style={{ margin: 0 }}>{comment.userName}</p>
          <div style={{ display: "flex", gap: "5px" }}>
            {comment.taggedUserName && (
              <span style={{ color: "navy" }}> @{comment?.taggedUserName}</span>
            )}
            <span style={{ fontSize: "15px", fontWeight: "bolder" }}>
              {comment.comment}
            </span>
          </div>
          <p
            style={{ fontSize: "10px", cursor: "pointer" }}
            onClick={() => setIsInputVisible(true)}
          >
            Reply
          </p>
          {isInputVisible && (
            <input
              type="text"
              placeholder="Please reply to comment"
              onFocus={() => setIsInputVisible(true)}
              // value={value.text}
              autoFocus
              onBlur={() => setIsInputVisible(false)}
              onKeyUp={handleInput}
            />
          )}
        </div>
      </div>
      <span
        style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}
      >
        <CiHeart /> {"  "}
        {comment.like}
      </span>
    </div>
  );
};

export default SingleComment;
function handleAddComment(value: string, id: string) {
  throw new Error("Function not implemented.");
}
