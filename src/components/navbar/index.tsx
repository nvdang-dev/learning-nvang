import { MdBrightnessHigh, MdBrightnessLow } from "react-icons/md";
import { BiBell, BiMessageRounded } from "react-icons/bi";
import Image from 'next/image'
import leo from '../../../public/leo.jpeg'
import { Badge } from "../common/badge";
import { Dropdown } from "../common/dropdown";
import { useState } from "react";
import { AiFillHome } from 'react-icons/ai'

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(current => !current)
    };
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
                        <BiMessageRounded size={20} color={'#3C3D4E'} />
                        <Badge badgeContent='3' />
                    </button>
                </div>
                <div className='pr-2'>
                    <button className='btn-icon dropdown' onClick={handleOpen}>
                        <BiBell size={20} color={'#3C3D4E'} />
                        <Badge badgeContent='5' />
                        <Dropdown open={open}>
                            <div className='noti-row'>
                                <div className='noti-icon'>
                                    <div className='icon-rounded'><AiFillHome color='#1cad91' /></div>
                                </div>
                                <div className='noti-text'>
                                    <p><b>+8 points</b> for homework</p>
                                    <p style={{ textAlign: 'start' }}>13 May</p>
                                </div>
                            </div>
                            <div className='noti-action'>
                                
                                  <span>All notifications</span>
                              
                            </div>
                        </Dropdown>
                    </button>
                </div>
                <div className='account-avatar'>
                    <Image src={leo} width={30} height={30} className='avatar' role='button' />
                </div>
            </div>
        </header>
    )
}