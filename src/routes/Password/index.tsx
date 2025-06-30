import "./index.css";
import { useState } from "react";
import { useHashPassword } from "@hooks/useHashPassword";

const predefinedPasswords = [
  "a10cdb0dc893d9c4d286000099e687b59bacae65a5e517d14bc2e90e08d7344d",
];

const Password = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleHash = async () => {
    setError("");
    const result = await useHashPassword(input);
    const match = predefinedPasswords.includes(result);
    if (match) {
      window.open(
        "https://docs.google.com/spreadsheets/d/1D8hOnSABGC-u-2LeJknX90t8HazM9mDCvolilJ85NJs/edit?usp=sharing",
        "_blank"
      );
    } else {
      setError("unknown.");
    }
  };

  return (
    <section className="password">
      <label htmlFor="pass">pasword?</label>
      <input
        type="text"
        name="pass"
        id="pass"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={handleHash}>
        check?
      </button>
      {error && <div className="error">{error}</div>}
    </section>
  );
};

export default Password;
