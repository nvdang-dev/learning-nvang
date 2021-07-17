import { MdMenu, MdKeyboardArrowLeft, MdViewQuilt } from "react-icons/md";
import { Card } from "../common/card";
import { RiHomeSmile2Fill } from "react-icons/ri";
interface Props {
    open: boolean
}
const style = (open: boolean) =>{
    return {
        display: open ? 'flex': 'none'
    }
}
export const SideBarMobile = ({open}: Props) => {

    return (
        <div className='sidebar-container-mobile' style={style(open)}>
            {/* <div className='sidebar-menu-mobile'>
                <div className='sidebar-menu-title-mobile'>
                    <span> LABA</span>
                </div>
            </div> */}
            <div className='sidebar-information-mobile'>
                <Card />
            </div>
            <div className='sidebar-study-mobile'>
                <div className='sidebar-study-content-mobile'>
                    <div className='sidebar-study-content-title-mobile'>
                        <div className='sidebar-study-content-title-icon-mobile'>
                            <MdViewQuilt size={20} color={'#3C3D4E'} />
                        </div>
                        <div className='sidebar-study-content-title-text-mobile'>
                            <span>MY STUDY</span>
                        </div>
                    </div>
                    <div className='sidebar-study-content-data-mobile'>
                        <div className='sidebar-study-content-data-li-mobile active' role='button'>
                            <span>All Tasks</span>
                        </div>
                        <div className='sidebar-study-content-data-li-mobile' role='button'>
                            <span>Knowledge base</span>
                        </div>
                        <div className='sidebar-study-content-data-li-mobile' role='button'>
                            <span>Rating</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sidebar-study-mobile'>
                <div className='sidebar-study-content-mobile'>
                    <div className='sidebar-study-content-title-mobile'>
                        <div className='sidebar-study-content-title-icon-mobile'>
                            <RiHomeSmile2Fill size={20} color={'#3C3D4E'} />
                        </div>
                        <div className='sidebar-study-content-title-text-mobile'>
                            <span>SUPPORT</span>
                        </div>
                    </div>
                    <div className='sidebar-study-content-data-mobile'>
                        <div className='sidebar-study-content-data-li-mobile' role='button'>
                            <span>FQA</span>
                        </div>
                        <div className='sidebar-study-content-data-li-mobile' role='button'>
                            <span>Ask a question</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}