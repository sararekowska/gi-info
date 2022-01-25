import { useListWeapons } from "../hooks/useListWeapons";

function WeaponList() {
  const { data } = useListWeapons();
  console.log(data);

  return (
    <>
      <main>
        {data?.map((weapon) => (
          <div className="list">
            Name: {weapon.name}
            <br />
            Type: {weapon.type}
            <br />
            Base Attack: {weapon.baseAttack}
            <br />
            <img
              src={
                "https://api.genshin.dev/weapons/" +
                weapon.name
                  .toLowerCase()
                  .replace(" ", "-")
                  .replace("'", "-")
                  .replaceAll(" ", "-")
                  .replace("--", "-") +
                "/icon"
              }
              alt="no icon availabe for this weapon"
              className="weapon-img"
            ></img>
          </div>
        ))}
      </main>
    </>
  );
}

export default WeaponList;
