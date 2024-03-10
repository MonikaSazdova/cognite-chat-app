import InitialsAvatar from "../User/InitialsAvatar";

function ContactCard({ contact, onClick, isSelected }) {
  return (
    <div
      className={`p-3 flex flex-wrap items-center gap-2 mb-1 rounded-lg cursor-pointer border border-gray-200  active:bg-slate-300 ${
        isSelected
          ? "bg-slate-300 hover:bg-slate-300"
          : "bg-slate-100 hover:bg-slate-200"
      }`}
      onClick={onClick}
    >
      <InitialsAvatar user={contact} isHeader={false} />
      <div className="flex-1 min-w-0">
        <div className="font-semibold truncate">{`${contact.name} ${contact.surname}`}</div>
        {/* <div className="text-sm truncate">{message}</div> */}
      </div>
      {/* <div className="whitespace-nowrap self-end text-xs">{time}</div> */}
    </div>
  );
}

export default ContactCard;
