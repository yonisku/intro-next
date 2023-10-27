import { useState } from "react";

//Header Component
function Header({ title }) {
  return <h1>{title ? title : "Default"}</h1>;
}

//HomePage Component
export default function HomePage() {
  const names = ["Yonis", "Kurniawan"];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header title="Hello World" />
      <Header title="This is Next.js 💙" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li> //key for unique item
        ))}
      </ul>

      <button onClick={handleClick}>like ({likes})</button>
    </>
  );
}
