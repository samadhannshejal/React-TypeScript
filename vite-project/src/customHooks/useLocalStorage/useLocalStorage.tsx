const useLocalStorage = (key: string) => {
  const setItems = (value: unknown) => {
    if (typeof value == "object" && value !== null) {
      const obj = {
        ...value,
        id: crypto.randomUUID(),
      };
      const storedItems = localStorage.getItem(key);
      const itemsArray = storedItems ? JSON.parse(storedItems) : [];
      if (Array.isArray(itemsArray)) itemsArray.push(obj);

      localStorage.setItem(key, JSON.stringify(itemsArray));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const getItems = () => {
    const items = localStorage.getItem(key) || "";
    return JSON.parse(items);
  };
  const removeItems = () => {
    localStorage.removeItem(key);
  };

  return { setItems, getItems, removeItems };
};

export default useLocalStorage;
