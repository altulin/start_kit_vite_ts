import { useEffect, useState } from "react";

const useStickyHead = (headRef: React.RefObject<HTMLDivElement>) => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  // handle scroll event
  const handleScroll = (elTopOffset: number, elHeight: number) => {
    if (window.scrollY > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    const header = headRef.current?.getBoundingClientRect();

    const handleScrollEvent = () => {
      if (!header) return;
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [headRef]);

  return sticky;
};

export default useStickyHead;
