interface AccordionItemProps{
  title:string,
  content:string,
  isOpen:boolean,
  setIsOpen:()=>void
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content,isOpen,setIsOpen }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
          fontSize: "20px",
          backgroundColor: "darkGray",
          height: "40px",
          alignItems: "center",
          cursor:'pointer'
        }}
        onClick={setIsOpen}
      >
        <span>{title}</span>
        <span>{isOpen ? "⬆️": "⬇️" }</span>
      </div>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

export default AccordionItem;
