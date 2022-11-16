interface Props {
  img: string;
  title: string;
  author: string;
  slug: string;
}

const Card: React.FC<Props> = ({ img, title, author, slug }) => {
  return (
    <div className="card">
      <a href={`/posts/${slug}`}>
        <img src={img} className="w-full h-32 sm:h-48 object-cover" />
        <div className="m-4">
          <span className="font-bold">{title}</span>
          <span className="block text-gray-500 text-sm">By {author}</span>
        </div>
      </a>
      {/* <div className="badge">
        <svgßß
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"ß
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

        <span>Israël</span>
      </div> */}
    </div>
  );
};
export default Card;
