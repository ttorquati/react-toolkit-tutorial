type ButtonProps = {
    className?: string
    children?: React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className, children, onClick, ...rest }: ButtonProps) {
    return (
        <button 
            className={`w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ${className}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}