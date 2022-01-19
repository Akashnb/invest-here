import React from "react";
import clsx from "classnames";

import { menuOptions } from "../../utils";
import useScrollPosition from "../../hooks/useScrollPosition";
import useScrollToSection from "../../hooks/useScrollToSection";

const Header = () => {
  const { scrollPosition } = useScrollPosition();
  const { handlerScrollTo, activeMenu } = useScrollToSection();

  return (
    <header
      className={clsx(
        "transition-all font-display ease-in delay-300 w-full top-0 z-50 bg-white",
        {
          "shadow-[4px_0_20px_-10px_rgba(0,0,0,0.25)] py-3 fixed":
            scrollPosition,
          "absolute py-6": !scrollPosition,
        }
      )}
    >
      <div className="max-w-6xl mx-auto h-full">
        <div className="flex items-center justify-between h-15">
          <p className="text-3xl">Invest Here</p>
          <nav className="flex items-center">
            {menuOptions.map((header) => (
              <p
                key={header.id}
                className={clsx("p-4 cursor-pointer transition-all ease-in delay-300", {
                  'text-accentMain': activeMenu === header.id,
                  'text-textAccentDark hover:text-accentMain': activeMenu !== header.id
                })}
                onClick={() => handlerScrollTo(header.id)}
              >
                {header.text}
              </p>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
