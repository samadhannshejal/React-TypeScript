interface Comment {
  id: string;
  userName: string;
  image: string;
  like: number;
  comment: string;
  taggedUserName?: string;
  replies?: Comment[];
}
//! wrong logic
const useInsertComment = () => {
  const addComment = (
    comments: Comment[],
    userId: string,
    text: string
  ): Comment[] => {
    const newComments = comments.map((comment) => {
      if (comment.id === userId) {
        // If the comment matches the userId, add the new reply
        const newReply: Comment = {
          id: crypto.randomUUID(),
          userName: "You",
          image: "https://via.placeholder.com/150/0000FF/808080?text=You",
          like: 0,
          comment: text,
          taggedUserName: comment.userName, // Tag the user being replied to
        };

        return {
          ...comment,
          replies: comment.replies ? [...comment.replies, newReply] : [newReply],
        };
      } else if (comment.replies && comment.replies.length > 0) {
        // If the comment has replies, search recursively within the replies
        return {
          ...comment,
          replies: addComment(comment.replies, userId, text),
        };
      }
      return comment;
    });

    return newComments;
  };

  return { addComment };
};

export default useInsertComment;
