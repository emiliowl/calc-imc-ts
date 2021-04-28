import { FormEvent } from "react";
import { useInput } from "../hooks/useInput.hook";

import Person from "../models/Person";

export interface ImcFormProps {
    onSubmitCallback: (height: number, weight: number) => Promise<void>;
    person: Person;
}

export default function ImcForm(props: ImcFormProps) {

    const { onSubmitCallback, person } = props;

    const [height, heightProps, resetHeight] = useInput("0.00");
    const [weight, weightProps, resetWeight] = useInput("0.00");

    const onSubmit = async (evt: FormEvent) => {
        evt.preventDefault();

        await onSubmitCallback(parseFloat(height), parseFloat(weight));

        resetHeight();
        resetWeight();
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <label>Altura</label>
                <input
                    id="altura"
                    placeholder="0.00"
                    type="number"
                    {...heightProps}
                />
            </div>
            <div className="row">
                <label>Peso</label>
                <input
                    id="peso"
                    placeholder="0.00"
                    type="number"
                    {...weightProps}
                />
            </div>
            <button type="submit" className="action">
                Calcular
            </button>
            
            <hr />

            <label><strong>Altura:</strong> {person.height}</label>
            <br />
            <label><strong>Peso:</strong> {person.weight}</label>
        </form>
    );
}
