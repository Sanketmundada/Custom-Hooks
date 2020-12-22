import { useEffect, useState } from 'react';

interface fetchDataInterface {
  data: any;
  isLoading: boolean;
  isError: boolean;
}

const useAsychFetch = () => {
  const [fetchData, setFetchData] = useState<fetchDataInterface>({
    data: null,
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      setFetchData((prev) => ({ ...prev, isloading: true, isError: false }));
      try {
      } catch (error) {
        setFetchData((prev) => ({ ...prev, isError: true }));
      }
      setFetchData((prev) => ({ ...prev, isLoading: false }));
    };
  }, []);

  return fetchData;
};

export default useAsychFetch;
