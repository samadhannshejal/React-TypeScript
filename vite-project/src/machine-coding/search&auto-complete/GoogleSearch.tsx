import { useEffect, useState } from "react";
import SearchResults from "./components/SearchResults";

const GoogleSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [cachedResult] = useState<{ [key: string]: string[] }>({});

//   const ref = useRef({});
  useEffect(() => {
    // you can do like this as debounced function

    const timeoutId = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const fetchData = async () => {
    if (cachedResult[searchQuery]) {
      setSearchResults(cachedResult[searchQuery]);
    } else {
      const response = await fetch(
        `https://www.google.com/complete/search?client=firefox&q=${searchQuery}`
      );
      const result = await response.json();
      cachedResult[searchQuery] = result[1];
      //   ref.current[searchQuery]=result[1];
      setSearchResults(result[1]);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", borderBottom: "10px" }}
    >
      <h2 style={{ textAlign: "start" }}>Google</h2>
      <input
        type="text"
        style={{
          width: "300px",
          height: "40px",
          fontSize: "25px",
          borderRadius: "50px",
          paddingLeft: "15px",
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      />
      {searchResults.length > 1 && isVisible && (
        <SearchResults results={searchResults} />
      )}
    </div>
  );
};

export default GoogleSearch;
