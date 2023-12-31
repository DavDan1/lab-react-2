import { useState } from "react";
import "./App.css";

const greeting = (name: string) => `Hello, ${name}`;

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <h1>{greeting(name)}</h1>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </>
  );
}

export default App;
