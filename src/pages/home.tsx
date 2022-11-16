import type { NextPage } from "next";
export { getStaticProps } from "../utils/getStaticProps";

if (typeof window !== "undefined") {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#menu");

  burger?.addEventListener("click", () => {
    if (menu?.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu?.classList.add("hidden");
    }
  });
}

const Home: NextPage = (props) => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>

      <body className="text-gray-600 font-body">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1 md:flex md:justify-end">
            <nav className="text-right">
              <div className="flex justify-between items-center">
                <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                  <a href="/" className="hover:text-gray-700">
                    Food Ninja{" "}
                  </a>
                </h1>
                <div className="px-4 cursor-pointer md:hidden" id="burger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </div>
              </div>
              <ul className="text-sm mt-6 hidden md:block" id="menu">
                <li className="text-gray-700 font-bold py-1">
                  <a
                    href="#"
                    className="px-4 flex justify-end border-r-4 border-primary-100"
                  >
                    <span>Home</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="px-4 flex justify-end border-r-4 border-white"
                  >
                    <span>About</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="px-4 flex justify-end border-r-4 border-white"
                  >
                    <span>Contact</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <main className="px-16 py-6 bg-gray-100 md:col-span-2">
            <div className="flex justify-center md:justify-end">
              <a
                href="#"
                className="text-primary border-primary-100 md:border-2 button hover:bg-primary-100 hover:text-white transition ease-out duration-500"
              >
                Log in
              </a>
              <a
                href="#"
                className="text-primary-100 ml-2 button border-primary-100 md:border-2 hover:bg-primary-100 hover:text-white transition ease-out duration-500"
              >
                Sign up
              </a>
            </div>

            <header>
              <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
              <h3 className="text-2xl font-semibold">For Ninjas</h3>
            </header>

            <div>
              <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                Latest Recipes
              </h4>

              <div className="mt-8 grid lg:grid-cols-3 gap-10">
                <div className="card">
                  <img
                    src="img/bandj.jpg"
                    alt="bram and janneke"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">5 Bean Chilli Stew</span>
                    <span className="block text-gray-500 text-sm">
                      Recipe by Mario
                    </span>
                  </div>
                  <div className="badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 inline-block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>25 mins</span>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="img/sunflowers.jpg"
                    alt="bram and janneke"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">Veg Noodles</span>
                    <span className="block text-gray-500 text-sm">
                      Recipe by Mario
                    </span>
                  </div>
                  <div className="badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 inline-block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>15 mins</span>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="img/rowing.jpeg"
                    alt="rowing"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">Curry</span>
                    <span className="block text-gray-500 text-sm">
                      Recipe by Mario
                    </span>
                  </div>
                  <div className="badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 inline-block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>25 mins</span>
                  </div>
                </div>
              </div>
              <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                Most Popular
              </h4>
              <div className="mt-8"></div>
              <div className="flex justify-center">
                <div className="bg-secondary-100 text-secondary-200 button hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out-300">
                  Load more
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </div>
  );
};

export default Home;
