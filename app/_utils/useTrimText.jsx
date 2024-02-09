import { useCallback, useMemo } from "react";

const useTrimmedText = ({text, maxLength}) => {
  const trimText = useCallback((str, length) => {
    if (str?.length <= length) {
      return str;
    }
    return `${str?.slice(0, length)}...`;
  }, []);

  return useMemo(() => trimText(text, maxLength), [text, maxLength, trimText]);
};

export default useTrimmedText;
