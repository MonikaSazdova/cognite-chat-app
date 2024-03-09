import cognite_logo from '../../assets/cognite_logo.webp';
import { useUser } from '../../context/UserContext';

const MainHeader = () => {
	const loggedUser = useUser();
	console.log('loggedUser', loggedUser);

	return (
		<header className="bg-gray-100 h-16 w-full fixed top-0 left-0 flex items-center px-4 z-10 justify-between">
			<img src={cognite_logo} alt="Logo" className="h-10" />
			<div className="rounded-full w-12 h-12 bg-gray-200 flex items-center justify-center">MS</div>
		</header>
	)
}

export default MainHeader;