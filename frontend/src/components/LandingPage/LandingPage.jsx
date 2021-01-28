const LandingPage = () => {
  return (
    <div className="bg-main bg-cover h-screen pl-3 pt-3">
      <h1 className="font-mono text-2xl">
        <span className="text-accentTwo">null@Anvil:</span>
        <span className="text-accentThree">[/]$</span>
        <span className="text-white text-xl">
          {"  "}Where "Hello World" meets "It was a dark and stormy night."
        </span>
        <div className="bg-white w-2.5 h-5 animate-pulse-fast"></div>
      </h1>
      <div className="text-accentOne text-4xl m-auto pt-400">
        <pre>
          <code>{`
  ░█████╗░███╗░░██╗██╗░░░██╗██╗██╗░░░░░
  ██╔══██╗████╗░██║██║░░░██║██║██║░░░░░
  ███████║██╔██╗██║╚██╗░██╔╝██║██║░░░░░
  ██╔══██║██║╚████║░╚████╔╝░██║██║░░░░░
  ██║░░██║██║░╚███║░░╚██╔╝░░██║███████╗
  ╚═╝░░╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚═╝╚══════╝
      `}</code>
        </pre>
      </div>
    </div>
  );
};

export default LandingPage;
