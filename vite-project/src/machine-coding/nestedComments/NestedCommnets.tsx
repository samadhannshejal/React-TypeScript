import { useState } from "react";
import Comments from "./component/Comments";
import useInsertComments from "./customHooks/useInsertComments";
import { commentData } from "./DB/Data";
const NestedComments = () => {
  const [data, setData] = useState(commentData);
  const { insertComment } = useInsertComments();
  const handleAddComment = (id: string, text: string) => {
    const updatedData = insertComment(data, id, text);
    setData(updatedData);
  };

  return (
    <>
      <div style={{
          border: "1px solid black",
          borderRadius: "10px",
          width: "max-content", // Full width for responsive design
          maxWidth: "max-content", // Max width for larger screens
          height: "600px", // Set height for the scrollable container
          overflowY: "auto", // Enable scrolling
          margin: "0 auto", // Center the container
        }}>
        <div   style={{
            fontSize: "20px",
            fontWeight: "700",
            borderBottom: "1px solid black",
            position: "sticky",
            top: 0, // Stick the header to the top
            backgroundColor: "white", // Ensure the header is visible during scrolling
            zIndex: 1, // Ensure header stays above the comments
            padding: "10px 15px",
          }}>Nested Comments</div>
        {<Comments data={data} handleAddComment={handleAddComment} />}
      </div>
    </>
  );
};

export default NestedComments;
