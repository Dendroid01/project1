import {useEffect} from "react";
import FocusLock from 'react-focus-lock';
import MenuIcon from "../icons/MenuIcon.tsx";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({isOpen, onClose}) => {

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/65 transition-opacity duration-300 z-40 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}
                onClick={onClose}
            />

            <FocusLock disabled={!isOpen} returnFocus>
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transition-transform duration-300 ease-in-out ${
                        isOpen ? 'translate-x-0' : 'translate-x-full invisible'
                    }`}
                >
                    <button
                        onClick={onClose}
                        aria-label="Close menu"
                        className="absolute top-4 right-4 p-2 transition-colors"
                    >
                        <MenuIcon size={32} className="text-black" aria-hidden="true"
                                  focusable="false"/>
                    </button>

                    <div className="pt-20 px-6">
                        <nav className="flex flex-col space-y-6">
                            <a href="#"
                               className="text-body-2 font-medium text-grey-dark">
                                Main
                            </a>
                            <a href="#"
                               className="text-body-2 font-medium text-grey-dark">
                                About
                            </a>
                            <a href="#"
                               className="text-body-2 font-medium text-grey-dark">
                                Get in touch
                            </a>
                        </nav>
                    </div>
                </div>
            </FocusLock>
        </>
    );
};

export default MobileMenu;