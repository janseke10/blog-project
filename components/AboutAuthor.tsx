interface AuthorProps {
  author: {
    firstName: string;
    lastName: string;
    description: string;
    slug: string;
    avatar: {
      url: string;
    };
  };
}

const AboutAuthor: React.FC<AuthorProps> = ({ author }) => {
  return (
    <div className="container py-16 w-3/4">
      <h1 className="font-bold text-primary-100 text-xl text-left pb-5">
        About the Author
      </h1>
      <a href={`/authors/${author.slug}`}>
        <div className="grid grid-cols-3 rounded relative hover:shadow-lg">
          <div className="pl-5 py-4">
            <img
              className="rounded-full"
              src={author.avatar.url}
              alt="picture of author"
            />
          </div>
          <div className="col-span-2 py-4">
            <div className="text-primary-100 text-left font-bold">
              {author.firstName} {author.lastName}
            </div>
            <div className="text-gray-700 pr-5">{author.description}</div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default AboutAuthor;
