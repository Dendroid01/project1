import React, {cloneElement, isValidElement} from 'react';

const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-danger">
        <path fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"/>
    </svg>
);


export interface FormFieldProps {
    label: string;
    required?: boolean;
    error?: string;
    icon?: React.ReactNode;
    children: React.ReactElement;
    className?: string;
    id: string;
    disabled?: boolean;
}

export const FormField = ({
                              label,
                              required,
                              error,
                              icon,
                              children,
                              className = "",
                              id,
                              disabled = false,
                          }: FormFieldProps) => {
    const hasError = !!error;
    const errorId = id ? `${id}-error` : undefined;

    const childWithProps = isValidElement(children)
        ? cloneElement(children, {
            id,
            'aria-describedby': hasError ? errorId : undefined,
            'aria-disabled': disabled,
            className: `${(children.props as { className?: string })?.className || ''} ${
                disabled ? 'bg-grey-light text-grey-dark cursor-not-allowed' : ''
            }`.trim(),
        } as any)
        : children;

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label htmlFor={id}
                   className={`text-subtitle-2 md:text-subtitle-2-desktop font-semibold text-black`}>
                {label} {required && <span className="text-danger">*</span>}
            </label>
            <div
                className={`
        group flex md:w-78 md:h-13.75 items-center gap-2.5 py-3 px-5 rounded-2xl border transition-colors
        ${disabled
                    ? 'border-grey-light bg-grey-light text-grey-dark cursor-not-allowed opacity-50'
                    : hasError
                        ? 'border-danger bg-white'
                        : 'border-grey-light bg-white focus-within:border-lavender hover:border-lavender'
                }
    `}
            >
                {hasError ? <AlertIcon/> : icon}
                {childWithProps}
            </div>
            {hasError && (
                <span id={errorId} className="text-danger text-subtitle-2 font-semibold">
                    {error}
                </span>
            )}
        </div>
    );
};