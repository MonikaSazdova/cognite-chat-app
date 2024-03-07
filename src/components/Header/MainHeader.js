import cognite_logo from '../../assets/cognite_logo.webp';

const MainHeader = () => {
	return (
		<header className="bg-white h-16 w-full fixed top-0 left-0 flex items-center px-4 z-10">
			<img src={cognite_logo} alt="Logo" className="h-10"/>
		</header>
	)
}

export default MainHeader;