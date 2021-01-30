import CommandPrompt from "../CommandPrompt";
const LandingPage = () => {
  return (
    <div className="bg-main bg-cover h-screen pl-3 pt-3">
      <CommandPrompt location={window.location.pathname} />
      <div className="flex flex-row max-w-3xl items-start ">
        <img
          src="https://anvil-file-bucket.s3.amazonaws.com/images/name-ascii.png"
          alt="hidden"
          className="pt-10 "
        />
        <img
          src="https://anvil-file-bucket.s3.amazonaws.com/images/anvil-ascii.png"
          alt="hidden"
        />
      </div>
    </div>
  );
};

export default LandingPage;
