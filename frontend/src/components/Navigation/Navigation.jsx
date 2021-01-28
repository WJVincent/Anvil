import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../Forms/LoginFormModal";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="text-accentOne flex p-2 pl-3">
        <div>
          <LoginFormModal />
        </div>
        <p className="pl-2"> | </p>
        <div className="pl-2">
          <button>
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary">
      <ul>
        <li>{isLoaded && sessionLinks}</li>
      </ul>
    </div>
  );
}

export default Navigation;
