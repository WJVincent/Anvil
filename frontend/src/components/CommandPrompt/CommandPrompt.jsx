import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CommandPrompt = () => {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);

  const username = useSelector((state) =>
    state.session.user ? state.session.user.username : null
  );

  return (
    <h1 className="font-mono text-2xl flex flex-row pb-5">
      <span className="text-accentTwo">
        {username ? `${username}@Anvil:` : "null@Anvil:"}
      </span>
      <span className="text-accentThree">[{location}]$</span>
      <span className="text-white text-xl pl-3">
        {"  "}Where "Hello World" meets "It was a dark and stormy night."
      </span>
      <div className="bg-white w-2.5 h-5 animate-pulse-fast"></div>
    </h1>
  );
};

export default CommandPrompt;
