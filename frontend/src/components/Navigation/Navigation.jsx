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
      <>
        <LoginFormModal />
        <button>
          <Link style={{ textDecoration: "none" }} to="/signup">
            Sign Up
          </Link>
        </button>
      </>
    );
  }

  return (
    <ul>
      <li style={{ listStyle: "none" }}>{isLoaded && sessionLinks}</li>
    </ul>
  );
}

export default Navigation;
