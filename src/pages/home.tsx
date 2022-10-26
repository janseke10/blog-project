import type { NextPage } from "next";
import Head from "next/head";
import Card from "../../components/Card";
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

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VAGAWONG</title>
      </Head>

      <body>
        <div>
          <main className="px-16 py-6 bg-background ">
            <div className="text-4xl text-primary-100 font-semibold justify-center grid grid-flow-row">
              <h1 className="p-6">Welcome to Vagawong</h1>
              <img
                className="object-none w-full"
                src="./img/white-woman.jfif"
                alt="Art"
              />
            </div>

            <div>
              <h4 className="font-bold mt-12 pb-2 border-b border-primary-200">
                Latest Blogposts
              </h4>

              <div className="mt-8 grid lg:grid-cols-3 gap-10">
                <Card
                  img={"img/sunflowers.jpg"}
                  title={"Test 1"}
                  author={"Rob Wong Test"}
                />
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
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
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
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    <span>25 mins</span>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="font-bold mt-12 pb-2 border-b border-primary-200">
              Most Popular
            </h4>
            <div className="mt-8"></div>
            <div className="flex justify-center">
              <div className="bg-primary-200 text-secondary-200 button hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out-300">
                Load more
              </div>
            </div>
          </main>
        </div>
      </body>
    </div>
  );
};

export default Home;

// export async function getServerSideProps(context) {
//   const res = await fetch(`http://localhost/vagawong/wp-json/wp/v2/posts`);
//   const data = await res.json();
//   return {
//     props: {
//       data
//     },
//   }
// }
