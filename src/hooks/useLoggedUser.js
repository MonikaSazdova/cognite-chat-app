import { useData } from "../context/DataContext";

const useLoggedUser = () => {
  const data = useData();
  const users = data.users;
  const loggedUser = users.find((user) => user.userId === "00");
  return loggedUser;
};

export default useLoggedUser;
