
import { MdCropSquare } from "react-icons/md";
import { Card } from "../generic/card";
import { BsLightningFill } from "react-icons/bs";

export const Content = () => {
    return (
        <div className='content-container'>
            <div className='content-row'>
                <div className='content-title'>
                    <div className='content-title-start'>
                        <span>All lessons</span>
                    </div>
                    <div className='content-title-icon'>
                        <MdCropSquare />
                        <BsLightningFill color='#ffc227' />
                    </div>
                    <div className='content-title-end'>
                        <span>Supperfocus</span>
                    </div>
                </div>
            </div>
            <div className='content-row'>
                <div className='content-col-3'>

                </div>
                <div className='content-col-3'>

                </div>
                <div className='content-col-3'>

                </div>
                <div className='content-col-3'>

                </div>
            </div>
        </div>
    )
}