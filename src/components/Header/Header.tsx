import {useState} from 'react';
import LogoIcon from '../icons/LogoIcon.tsx';
import MenuIcon from '../icons/MenuIcon.tsx';
import MobileMenu from './MobileMenu.tsx'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const close = () => setIsOpen(false);

    return (
        <>
            <header className="w-full bg-white py-4 px-4 flex justify-between items-center">
                <LogoIcon size={35} className="text-black" aria-hidden="true" focusable="false"/>
                <button
                    onClick={toggleOpen}
                    className=""
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <MenuIcon size={32} className="text-black" aria-hidden="true"
                              focusable="false"/>
                </button>
            </header>

            <MobileMenu isOpen={isOpen} onClose={close}/>
        </>
    )
        ;
};

export default Header;