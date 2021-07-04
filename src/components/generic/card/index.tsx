
import Image from 'next/image'
import leo from '../../../../public/leo.jpeg'
import ruby from '../../../../public/diamond.ico';
import { MdChevronRight } from "react-icons/md";
// interface Props {
//     data: Object
// }
export const Card = () => {
    return (
        <div className="card">
            <div className='card-infor-basic'>
                <div className='card-infor-basic-content'>
                    <div className='card-infor-basic-content-value'>
                        <Image src={leo} width={30} height={30} className='avatar' role='button' />
                    </div>
                    <div className='card-infor-basic-content-value'>
                        <Image src={ruby} width={20} height={20} role='button' />
                    </div>
                    <div className='card-infor-basic-content-value'>
                        <span>28 rubies</span>
                    </div>
                </div>
            </div>
            <div className='card-progress-bar'>
                <div className='card-progress-bar-content'>
                    <div className='card-progress-bar-point'>
                        <span className='card-progress-bar-point-wrap'><b className='card-progress-bar-point-number'>112</b> points</span>
                    </div>
                    <div className='card-progress-bar-element'>
                        <div className='card-progress-bar-element-start'>

                        </div>
                        <div className='card-progress-bar-element-center'>

                        </div>
                        <div className='card-progress-bar-element-end'>

                        </div>
                    </div>
                </div>

            </div>
            <div className='card-title'>
                <span className='card-title-content' role='button'>My progress <MdChevronRight /></span>
            </div>
        </div>
    )
}