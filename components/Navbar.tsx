import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export interface NavigationProps {
  categories: [{ category_name: string; slug: string }];
}

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
  const currentRoute = router.pathname;

  console.log("categories: ", categories);
  // const names = categories.map((obj) => obj.category_name);
  categories.forEach((category) => {
    console.log(category.category_name);
  });

  return (
    <nav>
      <div className="sticky top-0 z-50">
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

        <ul className="text-lg hidden md:flex bg-white " id="menu">
          <li className="text-gray-700 font-bold py-3">
            <Link href="/">
              <a className={currentRoute === "/" ? "active" : "non-active"}>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li className="py-3">
            <Link href="/about">
              <a
                className={currentRoute === "/about" ? "active" : "non-active"}
              >
                <span>About</span>
              </a>
            </Link>
          </li>
          <li className="py-3">
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
          {categories.map((category) => {
            return (
              <li className="py-3">
                <Link href={`/categories/${category.slug}`}>
                  <a
                    href="#"
                    className="px-4 flex justify-end border-r-4 border-white"
                  >
                    <span>{category.category_name}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
