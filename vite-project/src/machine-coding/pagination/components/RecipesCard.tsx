interface RecipesCardProps {
  image: string;
  name: string;
  id: number;
}

const RecipesCard: React.FC<RecipesCardProps> = ({ image, name, id }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        boxShadow: "5px 3px 2px grey",
        width: "200px",
        height: "200px",
        minHeight: "max-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        borderRadius: "5px",
      }}
    >
      <img src={image} alt="food" width={"100%"} height={"90%"} />
      <p style={{ fontSize: "1 5px", fontWeight: "bold", margin: 0 }}>
        {id}){name}
      </p>
    </div>
  );
};

export default RecipesCard;
