function ContactCard({ name, message, time}) {
	return (
<div className="p-3 bg-slate-100 flex flex-wrap items-center gap-2 rounded-lg cursor-pointer">
  <div className="rounded-full w-14 h-14 bg-gray-200 flex items-center justify-center">MS</div>
  <div className="flex-1 min-w-0">
		<div className="font-semibold truncate">{ name }</div>
    <div className="text-sm truncate">{message}</div>
  </div>
  <div className="whitespace-nowrap self-end text-xs">{time}</div>
</div>
	);
}

export default ContactCard;