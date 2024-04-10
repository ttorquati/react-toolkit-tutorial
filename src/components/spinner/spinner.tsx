export function Spinner() {
    return (
        <div
            className="h-full inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-middle text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
        >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
    )
}