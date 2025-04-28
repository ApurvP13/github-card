import React, { useState } from "react";
import Header from "./components/Header";
import CardHolder from "./components/CardHolder";
import Footer from "./components/Footer";
import { ImRocket } from "react-icons/im";

const App = () => {
  const [username, setUsername] = useState(""); // holds the input
  const [submittedUsername, setSubmittedUsername] = useState(""); // holds final submitted username

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUsername(username.trim());
  };

  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <Header />

      {/* Username input */}
      {!submittedUsername && (
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 rounded-xl bg-gradient-to-br from-zinc-500 to-zinc-700 text-white focus:outline-none focus:ring-0"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-zinc-500 to-zinc-700 text-white hover:brightness-110 transition"
          >
            <ImRocket />
          </button>
        </form>
      )}

      {/* Card Holder */}
      {submittedUsername && <CardHolder username={submittedUsername} />}

      <Footer />
    </div>
  );
};

export default App;
