import { useMemo } from "react";
import { sideBanners } from "./hygraphApi";
import { useGQLQuery } from "./useGQLQuery";

const useGetBanner = () => {
  const { data, error } = useGQLQuery("sideBanners", sideBanners);

  return useMemo(() => ({ banner: data, error }), [data, error]);
};

export default useGetBanner;
