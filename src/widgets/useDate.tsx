import { useEffect, useState } from "react";

export const useDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  });

  
  return date;
};
