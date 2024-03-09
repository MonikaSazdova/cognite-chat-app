export const adjustTextareaHeight = e => {
	const textarea = e.target;
	textarea.style.height = 'auto';
	let newHeight = textarea.scrollHeight;
	const singleRowHeight = 20;
	if (newHeight < singleRowHeight) {
			newHeight = singleRowHeight;
	}
	const maxHeight = singleRowHeight * 7;
	if (newHeight > maxHeight) {
			newHeight = maxHeight;
			textarea.style.overflowY = 'auto';
	} else {
			textarea.style.overflowY = 'hidden';
	}
	textarea.style.height = `${newHeight}px`;
}