import { useState, useRef, FormEvent } from "react";

import ImcTableView from "./views/ImcTableView";
import ImcView from "./views/ImcView";
import ImcController from "./controllers/ImcController";
import Person from "./models/Person";

import "./App.css";

function App() {
    const [controller] = useState(new ImcController());
    const [person, setPerson] = useState(new Person(0.0, 0.0));

    const heightElem = useRef<HTMLInputElement>(null);
    const weightElem = useRef<HTMLInputElement>(null);

    const calculateImc = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        var newPerson = new Person(
            parseFloat(heightElem?.current?.value ?? "0.0"),
            parseFloat(weightElem?.current?.value ?? "0.0")
        );

        const personCalculated = await controller.calculate(
            newPerson.toObject()
        );
        setPerson(personCalculated);
    };

    return (
        <div className="container">
            <div className="data">
                <div className="form">
                    <div className="row">
                        <ImcTableView />
                    </div>
                    <hr />
                    <form onSubmit={calculateImc}>
                        <div className="row">
                            <label>Altura</label>
                            <input id="altura" ref={heightElem} placeholder="0.00" />
                        </div>
                        <div className="row">
                            <label>Peso</label>
                            <input id="peso" ref={weightElem} placeholder="0.00" />
                        </div>
                        <button
                            type="submit"
                            className="action"
                        >
                            Calcular
                        </button>
                    </form>
                </div>
            </div>
            <hr />
            <ImcView className="data" person={person} />
        </div>
    );
}

export default App;
