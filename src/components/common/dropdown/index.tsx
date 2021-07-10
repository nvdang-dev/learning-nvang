import { useEffect, useRef, useState } from "react";

interface Props {
    children: JSX.Element[],
    open: boolean,
    onClose: Function,
    anchor: any
}
const style = (open: boolean) => {
    return {
        display: open ? 'block' : 'none'
    }
}
function useComponentVisible(initialIsVisible: boolean, onClose: Function, anchor: any) {
    const [isComponentVisible, setIsComponentVisible] = useState(
        initialIsVisible
    );
    const ref = useRef<HTMLDivElement>(null);

    const handleHideDropdown = (event: any) => {
        if (event.key === "Escape") {
            onClose()
        }
    };
    const handleClickOutside = (event: any) => {
        if (ref.current && anchor && !ref.current.contains(event.target) && !anchor.current.contains(event.target)) {
            onClose()
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    });
    return { ref, isComponentVisible, setIsComponentVisible };
}
export const Dropdown = ({ children, open, onClose, anchor }: Props) => {
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible,
    } = useComponentVisible(false, onClose, anchor);
    useEffect(() => {
        setIsComponentVisible(open)
    }, [open, setIsComponentVisible])
    return (
        <div className="dropdown-content" style={style(isComponentVisible)} ref={ref}>
            {children}
        </div>
    )
}