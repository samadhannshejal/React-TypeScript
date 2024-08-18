const Memelistning = ({ meme }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        height: "250px",
        borderRadius: "5px",
        boxShadow: "10px 8px 6px black",
      }}
    >
      <img src={meme.url} alt="meme not found" width={200} height={200} />
      <p>{meme.author}</p>
    </div>
  );
};

export default Memelistning;
