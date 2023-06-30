import NotFound from "./not-found";

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const MoviePage: React.FC<Props> = ({ params, searchParams }) => {
  // const id = params.id;
  if (params.id !== "12345") {
    return <NotFound />;
  }

  if (searchParams.error === "true") {
    throw new Error();
  }
  return <div className="container pt-20">Movie</div>;
};

export default MoviePage;
