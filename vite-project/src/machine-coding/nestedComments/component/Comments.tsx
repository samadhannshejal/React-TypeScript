import React, { useState } from "react";
import { HiOutlineReply } from "react-icons/hi";

export interface MyComments {
  id: string;
  userName: string;
  comment?: string;
  replies?: MyComments[];
}
interface MyCommentsProps {
  data: MyComments[];
  handleAddComment: (id: string, text: string) => void;
}
type InputVisibilityState = {
  isVisible: boolean;
  id: string;
};
const profileImages = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/54.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/85.jpg",
  "https://randomuser.me/api/portraits/women/92.jpg",
  "https://randomuser.me/api/portraits/men/48.jpg",
  "https://randomuser.me/api/portraits/women/16.jpg",
  "https://randomuser.me/api/portraits/men/23.jpg",
  "https://randomuser.me/api/portraits/women/29.jpg",
  "https://randomuser.me/api/portraits/men/71.jpg",
  "https://randomuser.me/api/portraits/women/55.jpg",
  "https://randomuser.me/api/portraits/men/98.jpg",
];
const Comments: React.FC<MyCommentsProps> = ({ data, handleAddComment }) => {
  const [isInputVisible, setIsInputVisible] = useState<InputVisibilityState>({
    isVisible: false,
    id: "",
  });
  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && e.currentTarget.value) {
      handleAddComment(isInputVisible.id, e.currentTarget.value);
      setIsInputVisible({ isVisible: false, id: "" });
    }
  };
  return (
    <div style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
      {data.map((comment, idx: number) => (
        <div
          key={idx}
          style={{
            borderRadius: "10px",
            }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              fontWeight: "bolder",
              alignItems: "center",
            }}
          >
            <img
              src={profileImages[idx % profileImages.length]}
              alt="user"
              width={35}
              height={35}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #ccc",
              }}
            />
            <p style={{ margin: 0 }}>{comment.userName}</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              marginLeft: "60px",
              gap: "10px",
            }}
          >
            <div>
              <p style={{ margin: 0 }}>{comment.comment}</p>

              {isInputVisible.isVisible && comment.id === isInputVisible.id && (
                <input
                  type="text"
                  placeholder="please reply to comment"
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                  autoFocus
                  onBlur={() => setIsInputVisible({ isVisible: false, id: "" })}
                  onFocus={(e) => (e.target.style.borderColor = "#007BFF")}
                  onKeyUp={(e) => handleInput(e)}
                />
              )}
            </div>
            <p
              style={{ margin: 0, cursor: "pointer" }}
              onClick={() =>
                setIsInputVisible({ isVisible: true, id: comment.id })
              }
            >
              {" "}
              {<HiOutlineReply />}Reply
            </p>
          </div>

          <div style={{ marginLeft: "60px" }}>
            {comment.replies && (
              <Comments
                data={comment.replies}
                handleAddComment={handleAddComment}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
