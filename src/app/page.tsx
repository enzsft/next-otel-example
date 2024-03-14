import { incrementTally } from "./actions";
import { store } from "../store";

const getTally = async () => {
  return { tally: store.tally };
};

export default async function Home() {
  const { tally } = await getTally();

  return (
    <>
      <h1>Tally</h1>
      <p>{tally}</p>
      <form action={incrementTally}>
        <button type="submit">Increment Tally</button>
      </form>
    </>
  );
}
