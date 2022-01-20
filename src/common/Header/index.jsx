import React from "react";
import clsx from "classnames";
import { Popover, Transition } from "@headlessui/react";

import { menuOptions } from "../../utils";
import useScrollPosition from "../../hooks/useScrollPosition";
import useScrollToSection from "../../hooks/useScrollToSection";
import { MenuIcon } from "../../utils/icons";

const Header = () => {
  const { scrollPosition } = useScrollPosition();
  const { handlerScrollTo, activeMenu } = useScrollToSection();

  return (
    <Popover
      as="header"
      className={clsx(
        "transition-all font-display ease-in delay-300 w-full top-0 z-50 bg-white",
        {
          "shadow-[4px_0_20px_-10px_rgba(0,0,0,0.25)] p-3 fixed":
            scrollPosition,
          "absolute p-6": !scrollPosition,
        }
      )}
    >
      <div className="max-w-6xl mx-auto h-full relative">
        <div className="flex items-center justify-between h-15">
          <button
            className="text-3xl cursor-pointer"
            onClick={() => handlerScrollTo("#home")}
          >
            Invest Here
          </button>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex items-center">
            {menuOptions.map((header) => (
              <p
                key={header.id}
                className={clsx(
                  "p-4 cursor-pointer transition-all ease-in delay-300",
                  {
                    "text-accentMain": activeMenu === header.id,
                    "text-textAccentDark hover:text-accentMain":
                      activeMenu !== header.id,
                  }
                )}
                onClick={() => handlerScrollTo(header.id)}
              >
                {header.text}
              </p>
            ))}
          </Popover.Group>
        </div>
      </div>
    </Popover>
    // <header
    //   className={clsx(
    //     "transition-all font-display ease-in delay-300 w-full top-0 z-50 bg-white",
    //     {
    //       "shadow-[4px_0_20px_-10px_rgba(0,0,0,0.25)] py-3 fixed":
    //         scrollPosition,
    //       "absolute py-6": !scrollPosition,
    //     }
    //   )}
    // >
    //   <div className="max-w-6xl mx-auto h-full">
    //     <div className="flex items-center justify-between h-15">
    //       <p className="text-3xl">Invest Here</p>
    //       <nav className="flex items-center">
    //         {menuOptions.map((header) => (
    //           <p
    //             key={header.id}
    //             className={clsx("p-4 cursor-pointer transition-all ease-in delay-300", {
    //               'text-accentMain': activeMenu === header.id,
    //               'text-textAccentDark hover:text-accentMain': activeMenu !== header.id
    //             })}
    //             onClick={() => handlerScrollTo(header.id)}
    //           >
    //             {header.text}
    //           </p>
    //         ))}
    //       </nav>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
