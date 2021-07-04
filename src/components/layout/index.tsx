import React from "react";
import { SideBar } from '../sidebar';

interface Props {
    children: JSX.Element
}
export default function Main({ children }: Props) {
    return (
        <main className='main'>
            <div className='sidebar'>
                <SideBar />
            </div>
            <div className='content'>
                {children}
            </div>
        </main>
    )
}