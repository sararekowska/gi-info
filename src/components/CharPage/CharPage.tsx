import { useParams } from "react-router-dom";

const CharPage = () => {
  const { name } = useParams<{ name?: string }>();

  return (
    <>
      <div>{name}</div>
    </>
  );
};

export default CharPage;
