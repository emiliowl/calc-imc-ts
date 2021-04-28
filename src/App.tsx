import { useState } from "react";

import ImcTableView from "./views/ImcTableView";
import ImcView from "./views/ImcView";
import ImcForm from "./forms/ImcForm";
import ImcController from "./controllers/ImcController";
import Person from "./models/Person";

import "./App.css";

function App() {
    const [controller] = useState(new ImcController());
    const [person, setPerson] = useState(new Person(0.0, 0.0));

    const calculateImc = async (height: number, weight: number) => {
        var newPerson = new Person(height, weight);

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
                    <ImcForm onSubmitCallback={calculateImc} person={person} />
                </div>
            </div>
            <hr />
            <ImcView className="data" person={person} />
        </div>
    );
}

export default App;
