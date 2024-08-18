import React from "react";

interface MyPaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}
const PaginationBar: React.FC<MyPaginationProps> =React.memo( ({
  currentPage,
  totalPages = 0,
  handlePageChange,
}) => {
    console.log("render child")
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      {currentPage > 0 && (
        <div
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Pre
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {totalPages &&
          [...Array(totalPages)].map((_, idx) => (
            <div
              key={idx}
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                cursor: "pointer",
                color: currentPage === idx ? "red" :undefined,
              }}
              onClick={() => handlePageChange(idx)}
            >
              {" "}
              {idx + 1}
            </div>
          ))}
      </div>
      {currentPage < totalPages - 1 && (
        <div
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </div>
      )}
    </div>
  );
});

export default PaginationBar;
