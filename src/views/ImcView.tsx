import { usePerson } from '../hooks/usePerson.hook';

export interface ImcViewProps {
    className?: string
}

export default function ImcView(props: ImcViewProps) {
    console.log("oh well... rendering " + JSON.stringify(props));

    const [person] = usePerson();

    return (
        <div className={props.className}>
            Seu IMC &eacute; <span id="imc">{person?.imc}</span>{" "}
            <strong>{person?.imcDescription}</strong>
        </div>
    );
}
