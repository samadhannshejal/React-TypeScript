import { useEffect, useState } from "react";
import ShimmerUISkeleton from "../shimmerUI/components/ShimmerUISkeleton";
interface Meme {
  url: string;
  author: string;
}

const InfiniteScroll = () => {
  //  api call
  // calculate the scroll destination  and call api
  const [data, setData] = useState<Meme[]>([]);
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    fetchAData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 30
    ) {
      setSkeleton(true);
      setTimeout(() => {
        fetchAData();
      }, 4000);
    }
  };

  const fetchAData = async () => {
    try {
      const response = await fetch("https://meme-api.com/gimme/20");
      const result = await response.json();
      setData((previousData) => [...previousData, ...result.memes]);
      setSkeleton(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {skeleton && <ShimmerUISkeleton />}

      {!skeleton && (
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          {data &&
            data.map((meme: Meme, idx: number) => (
              <div
                key={idx}
                style={{
                  border: "1px solid black",
                  height: "250px",
                  borderRadius: "5px",
                  boxShadow: "10px 8px 6px black",
                }}
              >
                <img
                  src={meme.url}
                  alt="meme not found"
                  width={200}
                  height={200}
                />
                <p>{meme.author}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
