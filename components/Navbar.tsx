import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { NavigationProps } from "../src/types";

if (typeof window !== "undefined") {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#menu");

  burger?.addEventListener("click", () => {
    console.log("click!!!");
    if (menu?.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu?.classList.add("hidden");
    }
  });
}

export default function Navbar({ categories }: NavigationProps) {
  const router = useRouter();
  const currentRoute = router.asPath;

  console.log("current route: ", currentRoute);

  return (
    <nav className="sticky top-0 z-50 ">
      <div className="bg-secondary-100 bg-opacity-50">
        <div className="flex justify-between items-center">
          <div className="px-4 cursor-pointer md:hidden" id="burger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        <ul className="text-lg hidden md:flex " id="menu">
          <li>
            <Link href="/">
              <a className={currentRoute === "/" ? "active" : "non-active"}>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={currentRoute === "/about" ? "active" : "non-active"}
              >
                <span>About</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={
                  currentRoute === "/contact" ? "active" : "non-active"
                }
              >
                <span>Contact</span>
              </a>
            </Link>
          </li>

          {categories?.map((category) => {
            console.log("yes hellooo node", category);
            if (
              category.node.ancestors === null &&
              !category.node.children.nodes.length
            ) {
              console.log("no ancestors and no children");
              return (
                <Link href={`/categories/${category.node.slug}`}>
                  <a
                    className={
                      currentRoute === `/categories/${category.node.slug}`
                        ? "active"
                        : "non-active"
                    }
                  >
                    <span>{category.node.name}</span>
                  </a>
                </Link>
              );
            }
            if (
              category.node.ancestors === null &&
              category.node.children.nodes.length
            ) {
              console.log("no ancestors yes children");
              console.log(category.node.name);
              return (
                <div className="flex justify-center">
                  <div className="dropdown relative">
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle={category.node.slug}
                      className="non-active dropdown-toggle flex items-center"
                    >
                      <span>{category.node.name}</span>
                      <svg
                        className="ml-1 w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id={category.node.slug}
                      className="hidden z-10 w-44 font-normal  rounded divide-y divide-gray-100 shadow"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dropdown-menu"
                        aria-labelledby="dropdownLargeButton"
                      >
                        {category.node.children.nodes.map((child, index) => {
                          console.log("child: ", child);
                          return (
                            <div>
                              <li key={index}>
                                <Link href={`/categories/${child.slug}`}>
                                  <a className="dropdown-item block py-2 px-4 hover:bg-gray-10">
                                    {child.name}
                                  </a>
                                </Link>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </ul>
      </div>
      <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
    </nav>
  );
}
