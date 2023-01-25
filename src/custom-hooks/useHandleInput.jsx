import {useState} from "react"

function useHandleInput(initialValue='') {
    const [first, setfirst] = useState(initialValue)

    return [first, setfirst];
}

export default useHandleInput;