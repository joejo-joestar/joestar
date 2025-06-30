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
        "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E" +
          "\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x73\x70" +
          "\x72\x65\x61\x64\x73\x68\x65\x65\x74\x73\x2F\x64\x2F" +
          "\x31\x44\x38\x68\x4F\x6E\x53\x41\x42\x47\x43\x2D\x75" +
          "\x2D\x32\x4C\x65\x4A\x6B\x6E\x58\x39\x30\x74\x38\x48" +
          "\x61\x7A\x4D\x39\x6D\x44\x43\x76\x6F\x6C\x69\x6C\x4A" +
          "\x38\x35\x4E\x4A\x73\x2F\x65\x64\x69\x74\x3F\x75\x73" +
          "\x70\x3D\x73\x68\x61\x72\x69\x6E\x67",
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
