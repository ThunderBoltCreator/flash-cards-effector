import { useEffect, useRef } from "react";

export const Test = () => {
  useEffect(() => {
    console.log(elRef.current);
  }, []);

  const elRef = useRef<HTMLDivElement>(null);

  return <div ref={elRef}>TESTTTTTTTTT</div>;
};
