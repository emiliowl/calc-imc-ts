import { useState, FormEvent } from "react";

import ImcTableView from "./views/ImcTableView";
import ImcView from "./views/ImcView";
import ImcController from "./controllers/ImcController";
import Person from "./models/Person";

import "./App.css";

function App() {
    const [controller] = useState(new ImcController());
    const [person, setPerson] = useState(new Person(0.0, 0.0));

    const [height, setHeight] = useState<string>("0.00");
    const [weight, setWeight] = useState<string>("0.00");

    const calculateImc = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        var newPerson = new Person(parseFloat(height), parseFloat(weight));

        const personCalculated = await controller.calculate(newPerson.toObject());
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
                            <input id="altura" placeholder="0.00" type="number" value={height} onChange={e => setHeight(e.target.value)} />
                        </div>
                        <div className="row">
                            <label>Peso</label>
                            <input id="peso" placeholder="0.00" type="number" value={weight} onChange={e => setWeight(e.target.value)} />
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
