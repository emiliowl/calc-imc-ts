import { useState } from "react";

import { usePerson } from './hooks/usePerson.hook';

import ImcTableView from "./views/ImcTableView";
import ImcView from "./views/ImcView";
import ImcForm from "./forms/ImcForm";
import ImcController from "./controllers/ImcController";
import Person from "./models/Person";

import "./App.css";

function App() {
    const [controller] = useState(new ImcController());
    const [,setPerson] = usePerson();

    const calculateImc = async (height: number, weight: number) => {
        let person = new Person(height, weight);
        person = await controller.calculate(person.toObject());
        setPerson(person);
    };

    return (
        <div className="container">
            <div className="data">
                <div className="form">
                    <div className="row">
                        <ImcTableView />
                    </div>
                    <hr />
                    <ImcForm onSubmitCallback={calculateImc} />
                </div>
            </div>
            <hr />
            <ImcView className="data" />
        </div>
    );
}

export default App;
