import { useSWRInfinite } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export function useGetPosts({ offset, filter }) {
  const getKey = (offset) => {
    const pageIndex = offset + offset * 2;
    return `/api/posts?offset=${pageIndex || 0}&date=${
      filter.date.asc ? "asc" : "desc"
    }&category=${filter.category.displayCategory}&search=${
      filter.search.searchValue
    }`;
  };

  return useSWRInfinite(getKey, fetcher);
}
