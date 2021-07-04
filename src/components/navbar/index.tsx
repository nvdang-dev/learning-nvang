import { MdBrightnessHigh, MdBrightnessLow } from "react-icons/md";
import { BiBell, BiMessage } from "react-icons/bi";
import Image from 'next/image'
import leo from '../../../public/leo.jpeg'
import { Badge } from "../generic/badge";
export const Navbar = () => {
    return (
        <header className='navbar-container'>
            <div className='navbar-start'>
                <span className='text-large pr-1'>
                    Strategic marketing
                </span>
                <span className='text-medium'>
                    Anna Smith
                </span>
            </div>
            <div className='navbar-end'>
                <div className='pr-2'>
                    <button className='btn-icon'>
                        <BiMessage size={20} color={'#3C3D4E'}/>
                        <Badge badgeContent='3'/>
                    </button>
                </div>
                <div  className='pr-2'>
                    <button className='btn-icon'>
                        <BiBell size={20} color={'#3C3D4E'}/>
                        <Badge badgeContent='5'/>
                    </button>
                </div>
                <div className='account-avatar'>
                    <Image src={leo} width={30} height={30} className='avatar' role='button'/>
                </div>
            </div>
        </header>
    )
}