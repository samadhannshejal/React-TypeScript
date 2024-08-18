const ShimmerUISkeleton = () => {
  return (
    <div style={{display:'flex', gap:'30px', flexWrap:'wrap'}}>
      {Array(20)
        .fill("")
        .map((_,idx) => (
          <div
          key={idx}
            style={{
              border: "1px solid black",
              height: "250px",
              borderRadius: "5px",
              boxShadow: "10px 8px 6px black",
              backgroundColor: "#d1cbcb",
              width: "200px",
            }}
          >
            {/* <img src={""}  width={200} height={200} />
        <p>{""}</p> */}
          </div>
        ))}
    </div>
  );
};

export default ShimmerUISkeleton;
