import { useCallback, useMemo, useState } from "react";
import useFetch from "../../customHooks/useFetch/useFetch";
import RecipesCard from "./components/RecipesCard";
import PaginationBar from "./components/PaginationBar";
import ShimmerUISkeleton from "../shimmerUI/components/ShimmerUISkeleton";

interface Recipe {
  image: string;
  name: string;
  id: number;
}

interface MyRecipe {
  recipes: Recipe[];
  total: number; // Assuming the API returns the total number of recipes
}

const LIMIT = 5;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(LIMIT);
  const { data, loading }: { data?: MyRecipe; loading: boolean } = useFetch(
    `https://dummyjson.com/recipes?limit=${limit}&skip=${
      limit * currentPage
    }&select=name,image`
  );
  const totalPages = useMemo(
    () => Math.ceil(Number(data?.total / limit) ),
    [data?.total, limit] 
  );

  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= totalPages) {
        setCurrentPage(0);
      } else {
        setCurrentPage(page);
      }
    },
    [totalPages]
  );

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberValue = value ? Number(value) : LIMIT; // Default to LIMIT if empty
    setLimit(numberValue);
  };
  const debounce = (cb: (...args:never) => void) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: never) => {
      clearTimeout(timeoutId);
      console.log('inner called')
      timeoutId = setTimeout(() => {
        cb(...args);
      }, 1000);
    };
  };
  const optimizedLimitChange = debounce(handleLimitChange);

  return (
    <>
      {loading ? (
        <ShimmerUISkeleton />
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {data &&
            data.recipes.map((recipe: Recipe) => {
              return <RecipesCard key={recipe.id} {...recipe} />;
            }) }
        </div>
      )}

      {!data && (
        <>
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
          <input
            type="number"
            placeholder="Please set limit"
            onChange={optimizedLimitChange}
            style={{ height: "30px", marginRight: "20px" }}
          />
          <input
            type="number"
            placeholder="Go to page"
            style={{ height: "30px" }}
            value={currentPage + 1}
            min={1}
            max={totalPages}
            onChange={(e) => handlePageChange(Number(e.target.value) - 1)}
          />
        </>
      )}
    </>
  );
};

export default Pagination;
