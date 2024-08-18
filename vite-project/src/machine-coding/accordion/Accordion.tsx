import { useState } from "react";
import AccordionItem from "./components/AccordionItem";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
  },
  {
    id: 2,
    title: "Why use TypeScript with React?",
    content:
      "TypeScript is a strongly typed programming language that builds on JavaScript. Using TypeScript with React helps catch errors early during development, provides better tooling support, and makes code easier to maintain.",
  },
  {
    id: 3,
    title: "How does React's virtual DOM work?",
    content:
      "The virtual DOM is a concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM using a library like ReactDOM. This process is called reconciliation, and it allows React to perform updates more efficiently.",
  },
  {
    id: 4,
    title: "What are React Hooks?",
    content:
      "React Hooks are functions that let you use state and other React features in functional components. Examples include useState, useEffect, useContext, and more.",
  },
  {
    id: 5,
    title: "What is JSX?",
    content:
      "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to XML or HTML and is used with React to describe what the UI should look like.",
  },
];

const Accordion = () => {
  const [isOpen, setIsOpen] = useState<null | number>(null);
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      {accordionData.map((items, idx) => (
        <AccordionItem
          key={items.id}
          title={items.title}
          content={items.content}
          isOpen={idx === isOpen}
          setIsOpen={() => {
            idx === isOpen ? setIsOpen(null) : setIsOpen(idx);
          }}
        />
      ))}
    </div>
  );
};

export default Accordion;
