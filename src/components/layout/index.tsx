import React from "react";
import { SideBar } from '../sidebar';
import { Navbar } from '../navbar';
import { Content } from "../content";

interface Props {
    children: JSX.Element
}
export default function Main({ children }: Props) {
    return (
        <div className='layout-container'>
            <div className='layout-sidebar'>
               <SideBar />  
            </div>
             <div className='layout-content' >
                     <div className='layout-navbar'>
                     <Navbar />
                </div>
                <main className='layout-main'>
                    <Content />
                    {/* {children} */}
                </main>
            </div>
    </div>
    )
}