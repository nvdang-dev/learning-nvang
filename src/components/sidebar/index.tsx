import { MdMenu, MdKeyboardArrowLeft } from "react-icons/md";

export const SideBar = () => {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-menu'>
                <div className='sidebar-menu-title'>
                        <span> LABA</span>
                </div>
                <div className='sidebar-menu-icon'>
                    <button className='sidebar-menu-icon-btn'>
                        <MdKeyboardArrowLeft size={20} color={'#3C3D4E'} />  <MdMenu size={20} color={'#3C3D4E'}/>
                    </button>
                </div>

            </div>
            <div className='sidebar-information'></div>
            <div className='sidebar-study'></div>
            <div className='sidebar-support'></div>
        </div>
    )
}