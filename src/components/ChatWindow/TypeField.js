import { useState } from 'react';
import { adjustTextareaHeight } from '../../utils/utils';

function TypeField() {
	const [message, setMessage] = useState('');

	const handleInputChange = e => setMessage(e.target.value);

	const handleOnSend = e => {
		setMessage(e.target.value);
	}

	return (
		<div className="w-full max-h-52 flex-shrink-0 bg-white pl-10 pr-14 py-3 pt-4 items-center flex flex-row justify-between">
			<textarea
				placeholder="Type a message"
				className="resize-none w-full bg-transparent border-none placeholder-gray-500 focus:ring-0 focus:border-none focus:outline-none mr-4"
				style={{ textAlign: 'left', overflowY: 'hidden' }}
				value={message}
				onChange={handleInputChange}
				onInput={adjustTextareaHeight}
			></textarea>
			<button className='w-20 h-8 bg-blue-600 rounded-lg text-white' onClick={handleOnSend} >Send</button>
		</div>
	)
}

export default TypeField;