function ChatWindowHeader({ name }) {
	return (
		<div className="w-full bg-white h-16 flex-shrink-0 p-3 items-center flex gap-2 border-y border-gray-300" >
			<div className="rounded-full w-12 h-12 bg-gray-200 flex items-center justify-center">MS</div>
			<div className="font-semibold truncate">{name}</div>
		</div>
	)
}

export default ChatWindowHeader;