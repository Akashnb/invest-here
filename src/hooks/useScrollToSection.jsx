import { useCallback, useState } from "react";

const useScrollToSection = () => {
  const [activeMenu, setActiveMenu] = useState("#home");

  const handlerScrollTo = useCallback(
    (sectionId) => {
      setActiveMenu(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
      }
    },
    [setActiveMenu]
  );

  return {
    handlerScrollTo,
    activeMenu,
  };
};

export default useScrollToSection;
