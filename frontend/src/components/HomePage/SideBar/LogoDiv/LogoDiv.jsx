import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const LogoDiv = () => {
  const history = useHistory();

  return (
    <div
      id="logo-div"
      className="font-jetbrains text-5xl font-extrabold text-accentOne h-60"
    >
      <div className="flex justify-center items-center flex-col pt-5 pb-2">
        <h1>Anvil</h1>
        <img
          onClick={() => history.push("/")}
          className="cursor-pointer w-20"
          src="https://anvil-file-bucket.s3.amazonaws.com/images/small-anvil-icon.png"
          alt="Anvil"
        />
      </div>

      <hr className="w-8/12 m-auto pt-1" />

      <div className="flex flex-row justify-between w-6/12 m-auto text-accentOne text-3xl pt-1 pb-2">
        <button>
          <a href="https://www.linkedin.com/in/william-vincent-5658851ba/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </button>
        <button>
          <a href="https://github.com/WJVincent">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </button>

        <button>
          <a href="https://github.com/WJVincent/Anvil">
            <FontAwesomeIcon icon={faCodeBranch} />
          </a>
        </button>
      </div>
      <hr className="w-8/12 m-auto pt-3 pb-2" />
    </div>
  );
};

export default LogoDiv;
