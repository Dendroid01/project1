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
            <header
                className="w-full bg-white py-3.5 px-4 md:px-10 flex justify-between items-center  mb-7 md:mb-11 border-b border-grey-light sticky top-0 z-40">
                <LogoIcon size={35} className="text-black" aria-hidden="true" focusable="false"/>

                <nav className="hidden md:flex flex-row items-center justify-end gap-6">
                    <a href="#main"
                       className="text-subtitle-2-desktop
                       font-medium
                       text-grey-dark
                       hover:text-lavender
                       focus:text-lavender
                       active:text-lavender
                       hover:cursor-pointer">
                        Main
                    </a>
                    <a href="#about"
                       className="text-subtitle-2-desktop
                       font-medium
                       text-grey-dark
                       hover:text-lavender
                       focus:text-lavender
                       active:text-lavender
                       hover:cursor-pointer">
                        About
                    </a>
                    <a href="#contact"
                       className="
                       text-subtitle-2-desktop
                       font-medium
                       text-grey-dark
                       hover:text-lavender
                       focus:text-lavender
                       active:text-lavender
                       hover:cursor-pointer">
                        Get in touch
                    </a>
                </nav>

                <button
                    onClick={toggleOpen}
                    className="md:hidden"
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