import { SvgIconComponent } from "@mui/icons-material";
import Input from "./Input"

export default function IconInput({
    size = 'sm',
    name,
    type = 'text',
    inputmode,
    label,
    placeholder, 
    handleChange, 
    handleFocus,
    handleBlur,
    value,
    isValid,
    error,
    icon
}: {
    size?: 'sm' | 'lg',
    name: string,
    type?: string,
    inputmode?: "email" | "search" | "text" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined,
    label?: string,
    placeholder?: string, 
    handleChange?: React.ChangeEventHandler<HTMLInputElement>, 
    handleFocus?: React.FocusEventHandler<HTMLInputElement>,
    handleBlur?: React.FocusEventHandler<HTMLInputElement>,
    value: string,
    isValid?: boolean,
    error?: string,
    icon: {Icon: SvgIconComponent, isVisible: boolean, handleClick: React.MouseEventHandler}
}) {
    let inputPadding = undefined;
    if (icon.isVisible) {
        inputPadding = size === 'sm' ? 'pl-10' : 'pl-12'; 
    }

    const Icon = <icon.Icon fontSize={size === "lg" ? "medium" : "small"} className="text-muted"/>;

    return (
        <Input
            size={size}
            name={name}
            type={type}
            inputmode={inputmode}
            label={label}
            placeholder={placeholder}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            value={value}
            isValid={isValid}
            error={error}
            className={inputPadding}>  
            <div className={`absolute h-full flex items-center px-3 ${icon.isVisible ? "block" : "hidden"}`}> 
                {icon.handleClick ? <button type="button" onClick={icon.handleClick}> {Icon} </button> : <>{Icon}</>}
            </div>
        </Input>
    )
}