import InitialsAvatar from "../User/InitialsAvatar";

function ChatWindowHeader({ name, surname }) {
	return (
		<div className="w-full bg-white h-16 flex-shrink-0 p-3 items-center flex gap-2 border-y border-gray-300" >
			<InitialsAvatar name={name} surname={surname} />
			<div className="font-semibold truncate">{name}</div>
		</div>
	)
}

export default ChatWindowHeader;