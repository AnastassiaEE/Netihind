'use client'

const baseClasses = 'w-full\
 bg-white\
 border\
 rounded-md\
 transition all\
 focus:outline-none\
 focus:shadow-lg\
 focus:shadow-primary/10\
 placeholder:text-muted';

const sizes: {[key: string]: string} = {
    sm: 'text-sm px-4 py-2.5',
    lg: 'text-base px-5 py-3'
}

const labelSizes: {[key: string]: string} = {
    sm: 'text-sm mb-1.5',
    lg: 'text-base mb-2.5'
}

export default function Input({
    size = 'sm',
    name,
    type = 'text',
    label,
    placeholder, 
    handleChange, 
    value, 
    handleFocus,
    isValid,
    error,
    className,
    children
}: {
    size?: 'sm' | 'lg',
    name?: string,
    type?: string,
    label?: string,
    placeholder?: string, 
    handleChange?: React.ChangeEventHandler<HTMLInputElement>, 
    value?: string, 
    handleFocus?: React.FocusEventHandler<HTMLInputElement>,
    isValid?: boolean,
    error?: string,
    className?: string,
    children?: React.ReactNode
}) {
    const borderColor = isValid ? 'border-valid focus:border-primary/30' : 'border-invalid';
    
    return (
        <>
            {label && <label htmlFor={name} className={`${labelSizes[size]} font-semibold block`}> {label} </label>}
            <div className="relative">
                {children}
                <input 
                    id={name}
                    type={type} 
                    className={`${baseClasses} ${sizes[size]} ${borderColor} ${className} text-muted-dark transition-[padding]`}  
                    placeholder={placeholder}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    value={value}
                    />
            </div>
            {!isValid &&
                <div className={`${size == "sm" ? "text-xs" : "text-sm"} text-error font-medium absolute`}>
                    {error}
                </div>
            }
        </>
    )
}