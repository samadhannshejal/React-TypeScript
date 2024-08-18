import { Key, useEffect } from "react";
import useApi from "../../customHooks/useApi/useApi";
import Memelistning from "./components/Memelistning";
import ShimmerUISkeleton from "./components/ShimmerUISkeleton";

const ShimmerUI = () => {
  const { data, isLoading, request } = useApi();
  useEffect(() => {
    const fetch = async () => {
      await request("https://meme-api.com/gimme/20", "GET");
    };
    fetch();
  }, []);
  return isLoading ? (
    <ShimmerUISkeleton />
  ) : (
    <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
      {data &&
        data.memes.map((meme: unknown, idx: Key | null | undefined) => <Memelistning key={idx} meme={meme} />)}
    </div>
  );
};

export default ShimmerUI;
