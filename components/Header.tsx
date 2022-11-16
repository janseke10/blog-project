import Link from "next/link";
import { ImYoutube, ImInstagram } from "react-icons/im";

export default function Header() {
  return (
    <header className="flex flex-row font-bold uppercase p-4 bg-secondary-100 bg-opacity-50 ">
      <h1 className="basis-3/4">
        <a
          href="/"
          className="hover:text-primary-200 text-4xl text-primary-100"
        >
          VAGAWONG{" "}
        </a>
      </h1>
      <div className="basis-1/4 flex gap-6">
        <Link href={"https://www.youtube.com/c/RobWongVagawong"}>
          <ImYoutube color="#563459" size={30} />
        </Link>
        <Link href={"https://www.instagram.com/vagawong/"}>
          <ImInstagram color="#563459" size={28} />
        </Link>
      </div>
    </header>
  );
}
