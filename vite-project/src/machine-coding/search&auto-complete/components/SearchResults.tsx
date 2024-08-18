const SearchResults = ({ results }: { results: string[] }) => {
  return (
    <div
      style={{
        width: "300px",
        border: "1px solid black",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        paddingLeft: "15px",
      }}
    >
      {results &&
        results.map((result: string, idx: number) => (
          <p
            key={idx}
            style={{
              textAlign: "start",
              cursor: "pointer",
              padding: "5px",
              transition: "background-color s ease",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLParagraphElement).style.backgroundColor =
                "lightgray";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLParagraphElement).style.backgroundColor =
                "transparent";
            }}
          >
            {result}
          </p>
        ))}
    </div>
  );
};

export default SearchResults;
