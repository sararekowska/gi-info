import "./App.css";
import { useListCharacters } from "./hooks/useListCharacters";
import logo from "./logo.png";

function App() {
  const { data } = useListCharacters();
  console.log(data);

  return (
    <>
      <header>
        <img src={logo} alt="logo" className="logo" />
      </header>
      <main>
        {data?.map((char: { name: string; nation: string; vision: string }) => (
          <div className="char">
            Name: {char.name}
            <br />
            Nation: {char.nation}
            <br />
            Vision: {char.vision}
            <br />
            <img
              src={
                "https://api.genshin.dev/characters/" +
                char.name
                  .toLowerCase()
                  .replace(" ", "-")
                  .replace("sangonomiya-", "")
                  .replace("kamisato-", "")
                  .replace("kaedehara-", "")
                  .replace("-shogun", "")
                  .replace("kujou-", "") +
                "/icon-big"
              }
              alt="no icon availabe for this character"
              className="char-img"
            ></img>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
