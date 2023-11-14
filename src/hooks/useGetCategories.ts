import useFirebasePagination from "@/hooks/useFirebasePagination";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Category {
  name: string;
  id: string;
  image: string;
}

const useGetCategories = () => {
  const pathname = usePathname();
  const { data, loadInitialData } = useFirebasePagination("products", 20);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  useEffect(() => {
    if (data.length > 0) {
      const filteredData = data.map((item) => ({
        name: item?.category?.[pathname.includes("/en") ? "english" : "arabic"],
        id: item.id,
        image: item?.image,
      }));
      const uniqueMap = new Map(filteredData.map((item) => [item.name, item]));
      setCategories(Array.from(uniqueMap.values()));
    }
  }, [data, pathname]);

  return { categories };
};

export default useGetCategories;
