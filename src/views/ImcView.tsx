import { useContext } from 'react';
import { PersonContext } from '../contexts/PersonContextProvider';

export interface ImcViewProps {
    className?: string
}

export default function ImcView(props: ImcViewProps) {
    console.log("oh well... rendering " + JSON.stringify(props));

    const { person } = useContext(PersonContext);

    return (
        <div className={props.className}>
            Seu IMC &eacute; <span id="imc">{person?.imc}</span>{" "}
            <strong>{person?.imcDescription}</strong>
        </div>
    );
}
