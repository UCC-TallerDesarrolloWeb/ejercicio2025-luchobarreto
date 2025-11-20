import styled from "styled-components";
import {Fragment} from "react";
import {Button} from "@components/Buttons.tsx";

interface ISchedule {
    day: number;
    startTime: string;
    endTime: string;
}

interface Props {
    name: string;
    description: string;
    schedules: ISchedule[];
    isLoggedIn: boolean;
}

const weekDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const StyledCard = styled.div`
    padding: 20px;
    border: solid 1px #ccc;
    width: fit-content;
    border-radius: 12px;
    
    & > button {
        margin-top: 12px;
    }
`;

const CardTitle = styled.h2`
    font-size: 20px;
    text-transform: capitalize;
    margin-bottom: 4px;
`;

const CardDescription = styled.p`
    margin-bottom: 8px;
`;

const Card: React.FC<Props> = ({
    name,
    description,
    schedules,
    isLoggedIn,
}) => {
    return (
        <Fragment>
            {schedules.map((schedule) => (
                <StyledCard>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                    <span><b>Día:</b> {weekDays[schedule.day]}</span>
                    <br/>
                    <span><b>Hora Inicio:</b> {schedule.startTime}</span>
                    <br/>
                    <span><b>Hora Fin:</b> {schedule.endTime}</span>
                    {isLoggedIn && <Button>Inscribirse</Button>}
                </StyledCard>
            ))}
        </Fragment>
    );
}

export default Card;