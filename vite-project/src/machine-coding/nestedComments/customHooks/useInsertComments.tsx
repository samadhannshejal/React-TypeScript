import { MyComments } from "../component/Comments";



const useInsertComments = () => {

  const insertComment = (data: MyComments[]=[], id?: string, text?: string) => {
    const updatedData :MyComments[]= data?.map((item: MyComments) => {
      if (item.id === id) {
        const updatedReplies = [
          {
            id: crypto.randomUUID(),
            userName: "You",
            comment: text,
            replies: [],
          },
          ...(item.replies || []),
        ];
        return {
          ...item,
          replies: updatedReplies,
        };
      }
      
     return   {
        ...item,
        replies: insertComment(item.replies || [], id, text)
      };
    });
    return updatedData;
  };
  return { insertComment };
};
export default useInsertComments;
