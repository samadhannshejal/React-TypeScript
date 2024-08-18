import { useState } from "react";
import Comments from "./component/Comments";
import useInsertComments from "./customHooks/useInsertComments";
import { commentData } from "./DB/Data";
const NestedComments = () => {
  const [data, setData] = useState(commentData);
  const { insertComment } = useInsertComments();
  const handleAddComment = (id: string, text: string) => {
    const updatedData=insertComment(data, id, text);
    setData(updatedData)
  };

  return (
    <div>{<Comments data={data} handleAddComment={handleAddComment} />}</div>
  );
};

export default NestedComments;
