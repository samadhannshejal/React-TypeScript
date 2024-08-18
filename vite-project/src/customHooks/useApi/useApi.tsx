import { useState } from "react";
interface MyConfig {
  method?: string;
  body?: string;
  header?: Record<string, string>;
}
const useApi = () => {
  const [data, setData] = useState<unknown>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown | object | string>();
  const request = async (
    url: string,
    method?: string,
    body: unknown = null,
    header?: Record<string, string>
  ) => {
    try {
      const config: MyConfig = {
        method,
        header,
      };
      if (body) {
        config.body = JSON.stringify(body);
      }
      const response = await fetch(url, config);
      const result = await response.json();
      setData(result);
    } catch (error: unknown) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isLoading, error, request };
};
export default useApi;
