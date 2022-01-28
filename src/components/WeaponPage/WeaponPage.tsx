import { useParams } from "react-router-dom";

const WeaponPage = () => {
  const { name } = useParams<{ name?: string }>();

  return (
    <>
      <div>{name}</div>
    </>
  );
};

export default WeaponPage;
