import { useState } from "react";

export const useRequest = (callback) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading];
};
