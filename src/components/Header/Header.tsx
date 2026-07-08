import {useState} from 'react';
import LogoIcon from '../icons/LogoIcon';
import MenuIcon from '../icons/MenuIcon';
import MobileMenu from './MobileMenu'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const close = () => setIsOpen(false);

    return (
        <>
            <header className="w-full bg-white py-4 px-4 flex justify-between items-center  mb-6 border-b border-grey-light">
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