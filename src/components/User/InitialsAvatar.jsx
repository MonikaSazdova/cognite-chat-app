function InitialsAvatar({ name, surname }) {

  const getInitials = (name = "", surname = "") => {
    return `${name[0].toUpperCase()}${surname[0].toUpperCase()}`;
  };

  return (
    <div className="rounded-full w-14 h-14 bg-gray-200 flex items-center justify-center">
      {getInitials(name, surname)}
    </div>
  );
}

export default InitialsAvatar;
