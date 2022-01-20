import React, { Fragment } from "react";
import clsx from "classnames";
import { Popover, Transition } from "@headlessui/react";

import { menuOptions } from "../../utils";
import useScrollPosition from "../../hooks/useScrollPosition";
import useScrollToSection from "../../hooks/useScrollToSection";
import { CloseIcon, MenuIcon } from "../../utils/icons";

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
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <button
                      className="text-3xl cursor-pointer"
                      onClick={() => handlerScrollTo("#home")}
                    >
                      Invest Here
                    </button>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <CloseIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid">
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
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      </div>
    </Popover>
  );
};

export default Header;
