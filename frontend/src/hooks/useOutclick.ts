import { MouseEvent, useEffect, useRef } from "react";

const useOutClick = (callback: () => void) => {
  const ref = useRef<null | HTMLElement>(null);

  useEffect(() => {
    const handOutEvent = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target)) {
        if (callback) callback();
      }
    };

    window.addEventListener("mousedown", handOutEvent);

    return () => {
      window.removeEventListener("mousedown", handOutEvent);
    };
  });

  return ref;
};

export default useOutClick;
