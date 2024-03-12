import cognite_logo from "../../assets/cognite_logo.webp";
import useLoggedUser from "../../hooks/useLoggedUser";
import InitialsAvatar from "../User/InitialsAvatar";

const MainHeader = () => {
  const loggedUser = useLoggedUser();

  return (
    <header className="bg-gray-100 h-16 w-full fixed top-0 left-0 flex items-center px-4 z-10 justify-between">
      <img src={cognite_logo} alt="Logo" className="h-10" />
      <InitialsAvatar user={loggedUser} isHeader={true} />
    </header>
  );
};

export default MainHeader;
