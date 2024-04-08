import { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../state/store"
import { incrementByOne, 
    incrementByFive, 
    incrementByTen, 
    decrementByOne, 
    decrementByFive, 
    decrementByTen, 
    incrementByAmount, 
    decrementByAmount, 
    incrementByAmountAsync,
    decrementByAmountAsync
} from  '../../state/slices'

export function Counter() {
    const [value, setValue] = useState('')

    const counter = useSelector((state: RootState) => state.counter.value)
    const isLoading = useSelector((state: RootState) => state.counter.isLoading)

    const dispatch = useDispatch<AppDispatch>()

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const inputValue = ev.target.value

        if(!isNaN(Number(inputValue))) {
            setValue(inputValue)
        }
    }

    const handleSubmit = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>, action: string) => {
        ev.preventDefault()

        if(action === 'increment') dispatch(incrementByAmount(Number(value)))
        if(action === 'decrement') dispatch(decrementByAmount(Number(value)))
        if(action === 'increment-async') dispatch(incrementByAmountAsync(Number(value)))
        if(action === 'decrement-async') dispatch(decrementByAmountAsync(Number(value)))
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4 flex flex-col gap-4 bg-white">
            <h1 className="font-bold text-xl">Counter: {counter}</h1>

            <div className="flex flex-row">
                <button 
                    className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" 
                    onClick={() => dispatch(decrementByTen())}
                >
                    -10
                </button>

                <button 
                    className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
                    onClick={() => dispatch(decrementByFive())}
                >
                    -5
                </button>

                <button 
                    className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
                    onClick={() => dispatch(decrementByOne())}
                >
                    -1
                </button>

                <button 
                    className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
                    onClick={() => dispatch(incrementByOne())}
                >
                    +1
                </button>

                <button 
                    className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
                    onClick={() => dispatch(incrementByFive())}
                >
                    +5
                </button>

                <button 
                    className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                    onClick={() => dispatch(incrementByTen())}
                >
                    +10
                </button>
            </div>
            
            <form className="flex flex-col gap-4">
                <input 
                    type="text"
                    placeholder="enter a custom value" 
                    className="shadow appearance-none border rounded max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={value}
                    onChange={handleChange} />

                <div className="flex flex-row gap-4">
                    <button 
                        type="submit" 
                        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        onClick={(ev) => handleSubmit(ev, 'increment')}
                        disabled={isLoading}
                    >
                        Increment  
                    </button>

                    <button 
                        type="submit" 
                        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        onClick={(ev) => handleSubmit(ev, 'decrement')}
                        disabled={isLoading}
                    >
                        Decrement
                    </button>
                </div>

                <div className="flex flex-row gap-4">
                    <button 
                        type="submit" 
                        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        onClick={(ev) => handleSubmit(ev, 'increment-async')}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div
                                className="h-full inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-middle text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                                role="status"
                            >
                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                            </div>
                        ) : 'Inc Async'}
                    </button>

                    <button 
                        type="submit" 
                        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        onClick={(ev) => handleSubmit(ev, 'decrement-async')}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div
                                className="h-full inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-middle text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                                role="status"
                            >
                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                            </div>
                        ) : 'Dec Async'}
                    </button>
                </div>
            </form>
        </div>
    )
}
