import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const prevPath = useRef(null);

  useEffect(() => {
    const pathChanged = prevPath.current !== pathname;
    prevPath.current = pathname;

    if (pathChanged) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    if (!hash) {
      if (!pathChanged) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let raf;
    let tries = 0;


    const go = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (tries++ < 60) {
        raf = requestAnimationFrame(go);
      }
    };
    go();

    return () => cancelAnimationFrame(raf);
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToTop;
