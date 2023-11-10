import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    num: number;
    title: string;
    desc: string;
    current: number;
}

const Stepper = (props: Props) => {
    const { num, title, desc, current } = props;

    let otherClass = '';
    if (num === current) otherClass = 'current';
    if (num < current) otherClass = 'completed';

    return (
        <div className={`stepper-item ${otherClass}`} data-kt-stepper-element="nav">  
            <div className="stepper-wrapper">
                <div className="stepper-icon rounded-3">
                    <FontAwesomeIcon icon="check" className="stepper-check" />
                    <span className="stepper-number">{num}</span>
                </div>
                <div className="stepper-label">
                    <h3 className="stepper-title">{title}</h3>
                    <div className="stepper-desc fw-normal">{desc}</div>
                </div>
            </div>
            {num !== 6 && <div className="stepper-line h-40px"></div>}
        </div>
    )
}

export default Stepper;