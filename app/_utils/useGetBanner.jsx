import { useState, useEffect, useCallback, useMemo } from "react";
import { getSideBanner } from "./hygraphApi";

const useGetBanner = () => {
  const [banners, setBanners] = useState(null);
  const [error, setError] = useState(null);

  const getAllBanners = useCallback(async () => {
    try {
      const res = await getSideBanner();
      setBanners(res);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    getAllBanners();
  }, [getAllBanners]);

  const banner = banners?.sideBanners;
  return useMemo(() => ({ banner, error }), [banners, error]);
};

export default useGetBanner;
