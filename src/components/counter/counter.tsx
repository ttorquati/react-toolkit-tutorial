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
import { Button } from "../button"
import { Spinner } from "../spinner"

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
                
                <Button 
                    className="rounded-l"
                    onClick={() => dispatch(decrementByTen())}
                    disabled={isLoading}
                >
                    -10
                </Button>

                <Button 
                    onClick={() => dispatch(decrementByFive())}
                    disabled={isLoading}
                >
                    -5
                </Button>

                <Button 
                    onClick={() => dispatch(decrementByOne())}
                    disabled={isLoading}
                >
                    -1
                </Button>

                <Button 
                    onClick={() => dispatch(incrementByOne())}
                    disabled={isLoading}
                >
                    +1
                </Button>

                <Button 
                    onClick={() => dispatch(incrementByFive())}
                    disabled={isLoading}
                >
                    +5
                </Button>

                <Button 
                    className="rounded-r"
                    onClick={() => dispatch(incrementByTen())}
                    disabled={isLoading}
                >
                    +10
                </Button>
            </div>
            
            <form className="flex flex-col gap-4">
                <input 
                    type="text"
                    placeholder="enter a custom value" 
                    className="shadow appearance-none border rounded max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={value}
                    onChange={handleChange} />

                <div className="flex flex-row gap-4">
                    <Button 
                        type="submit" 
                        className="rounded"
                        onClick={(ev) => handleSubmit(ev, 'increment')}
                        disabled={isLoading}
                    >
                        Increment  
                    </Button>

                    <Button 
                        type="submit" 
                        className="rounded"
                        onClick={(ev) => handleSubmit(ev, 'decrement')}
                        disabled={isLoading}
                    >
                        Decrement
                    </Button>
                </div>

                <div className="flex flex-row gap-4">
                    <Button 
                        type="submit" 
                        className="rounded"
                        onClick={(ev) => handleSubmit(ev, 'increment-async')}
                        disabled={isLoading}
                    >
                        {isLoading ? <Spinner /> : 'Inc Async'}
                    </Button>

                    <Button 
                        type="submit" 
                        className="rounded"
                        onClick={(ev) => handleSubmit(ev, 'decrement-async')}
                        disabled={isLoading}
                    >
                        {isLoading ? <Spinner /> : 'Dec Async'}
                    </Button>
                </div>
            </form>
        </div>
    )
}
