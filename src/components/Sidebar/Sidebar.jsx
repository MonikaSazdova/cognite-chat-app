import icon_settings from '../../assets/icon_settings.png'


function Sidebar() {
  return <div className="w-16 bg-gray-100 h-full flex flex-col justify-end items-center pb-4">
      <img src={icon_settings} alt="Settings" className="h-7 w-7" />
  </div>;
}

export default Sidebar;