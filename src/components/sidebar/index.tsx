import { MdMenu, MdKeyboardArrowLeft, MdViewQuilt } from "react-icons/md";
import { Card } from "../generic/card";

export const SideBar = () => {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-menu'>
                <div className='sidebar-menu-title'>
                    <span> LABA</span>
                </div>
                <div className='sidebar-menu-icon'>
                    <button className='sidebar-menu-icon-btn'>
                        <MdKeyboardArrowLeft size={20} color={'#3C3D4E'} />  <MdMenu size={20} color={'#3C3D4E'} />
                    </button>
                </div>

            </div>
            <div className='sidebar-information'>
                <Card />
            </div>
            <div className='sidebar-study'>
                <div className='sidebar-study-content'>
                    <div className='sidebar-study-content-title'>
                        <div className='sidebar-study-content-title-icon'>
                            <MdViewQuilt size={20} color={'#3C3D4E'} />
                        </div>
                        <div className='sidebar-study-content-title-text'>
                            <span>MY STUDY</span>
                        </div>
                    </div>
                    <div className='sidebar-study-content-data'>
                        <div className='sidebar-study-content-data-li'>
                            <span>All Tasks</span>
                        </div>
                        <div className='sidebar-study-content-data-li'>
                            <span>Knowledge base</span>
                        </div>
                        <div className='sidebar-study-content-data-li'>
                            <span>Rating</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sidebar-study'>
                <div className='sidebar-study-content'>
                    <div className='sidebar-study-content-title'>
                        <div className='sidebar-study-content-title-icon'>
                            <MdViewQuilt size={20} color={'#3C3D4E'} />
                        </div>
                        <div className='sidebar-study-content-title-text'>
                            <span>SUPPORT</span>
                        </div>
                    </div>
                    <div className='sidebar-study-content-data'>
                        <div className='sidebar-study-content-data-li'>
                            <span>FQA</span>
                        </div>
                        <div className='sidebar-study-content-data-li'>
                            <span>Ask a question</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}