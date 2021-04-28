import { ChangeEvent, useState } from "react"

// in case you prefer to very much type everything
// interface UseInputFormHelper {
//     value: any;
//     onChange: (e: ChangeEvent<HTMLInputElement>) => void
// }

export function useInput(initialValue: string) {//: [any, UseInputFormHelper, () => void] {
    const [val, setVal] = useState(initialValue);

    return [
        val,
        { value: val, onChange: (e: ChangeEvent<HTMLInputElement>) => setVal(e.target.value) },
        () => setVal(initialValue)
    ] as const;
}
