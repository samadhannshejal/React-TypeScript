interface MyChatCard {
  userName: string;
  image: string;
  comment: string;
  id?: string;
}
const ChatCard: React.FC<MyChatCard> = ({ userName, image, comment }) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <img
        src={image}
        alt={userName}
        style={{ width: "40px", borderRadius: "50%" }}
      />
      <p>{userName}</p>
      <p style={{ fontWeight: "bold" }}>{comment}</p>
    </div>
  );
};

export default ChatCard;
