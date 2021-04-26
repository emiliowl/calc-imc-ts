import { useState } from "react";

import ImcTableView from "./views/ImcTableView";
import ImcView from "./views/ImcView";
import ImcController from "./controllers/ImcController";
import Person from "./models/Person";

import "./App.css";

function App() {
    const [controller] = useState(new ImcController());
    const [person, setPerson] = useState(new Person(0.0, 0.0));

    const calculateImc = async () => {
        const heightElem: HTMLInputElement | null = document.querySelector(
            "#altura"
        );
        const weightElem: HTMLInputElement | null = document.querySelector(
            "#peso"
        );

        if (!heightElem) throw Error("height is required field!");
        if (!weightElem) throw Error("weight is required field!");

        var newPerson = new Person(
            parseFloat(heightElem?.value),
            parseFloat(weightElem?.value)
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
                    <div className="row">
                        <label>Altura</label>
                        <input id="altura" placeholder="0.00" />
                    </div>
                    <div className="row">
                        <label>Peso</label>
                        <input id="peso" placeholder="0.00" />
                    </div>
                    <button
                        type="button"
                        onClick={calculateImc}
                        className="action"
                    >
                        Calcular
                    </button>
                </div>
            </div>
            <hr />
            <ImcView className="data" person={person} />
        </div>
    );
}

export default App;
