import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [collection, setCollection] = useState("");
  const getListAssets = async () => {};
  return (
    <div>
      <input
        type="text"
        value={collection}
        onChange={(e) => setCollection(e.target.value)}
      />
      <button onClick={getListAssets}></button>
    </div>
  );
};

export default Home;
