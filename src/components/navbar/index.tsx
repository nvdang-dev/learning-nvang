import { MdMenu } from "react-icons/md";
import { BiBell, BiMessageRounded } from "react-icons/bi";
import Image from 'next/image'
import leo from '../../../public/leo.jpeg'
import { Badge } from "../common/badge";
import { Dropdown } from "../common/dropdown";
import { useRef, useState } from "react";
import { AiFillHome } from 'react-icons/ai'
import _ from 'lodash'

export const Navbar = () => {
    const [anchor, setAnchor] = useState<any>(null)
    const refAnchor = useRef(null)
    const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (_.isNull(anchor)) {
            setAnchor(refAnchor)
        } else {
            onClose()
        }
    };
    const onClose = () => {
        setAnchor(null);
    }
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
            <div className='pr-2' id='menumobile'>
                    <button className='btn-icon'>
                    <MdMenu size={20} color={'#3C3D4E'} style={{marginTop:10}} />
                    </button>
                </div>
                <div className='pr-2'>
                    <button className='btn-icon'>
                        <BiMessageRounded size={20} color={'#3C3D4E'} />
                        <Badge badgeContent='3' />
                    </button>
                </div>
                <div className='pr-2'>
                    <button className='btn-icon dropdown' onClick={handleOpen} ref={refAnchor}>
                        <BiBell size={20} color={'#3C3D4E'} />
                        <Badge badgeContent='5' />
                        <Dropdown open={Boolean(anchor)} anchor={anchor} onClose={onClose}>
                            <div style={{backgroundColor:'#FCFCFD', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}>
                                <div className='noti-row'>
                                    <div className='noti-icon'>
                                        <div className='icon-rounded'><AiFillHome color='#1cad91' /></div>
                                    </div>
                                    <div className='noti-text'>
                                        <p style={{fontSize: 13}}><b>+8 points</b> for homework</p>
                                        <p style={{ textAlign: 'start', fontSize:12 }}>13 May</p>
                                    </div>
                                </div>
                            </div>
                            <div className='noti-action' role='button' >
                                <span style={{ color: '#5E9DF5', fontSize: 13, fontWeight: 400}}>All notifications</span>
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