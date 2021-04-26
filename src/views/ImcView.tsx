import Person from '../models/Person';

export interface ImcViewProps {
    person: Person,
    className?: string
}

export default function ImcView(props: ImcViewProps) {
    console.log("oh well... rendering " + JSON.stringify(props));

    const { person } = props;

    return (
        <div className={props.className}>
            Seu IMC &eacute; <span id="imc">{person.imc}</span>{" "}
            <strong>{person.imcDescription}</strong>
        </div>
    );
}
