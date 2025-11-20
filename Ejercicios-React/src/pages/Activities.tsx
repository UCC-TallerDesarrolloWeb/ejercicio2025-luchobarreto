import {Fragment, useEffect, useState} from "react";
import Card from "@components/Card";

interface Props {
    isLoggedIn: boolean;
}

interface ISchedule {
    day: number;
    startTime: string;
    endTime: string;
}

export interface IActivity {
    name: string;
    description: string;
    schedules: ISchedule[];
    isLoggedIn: boolean;
}

const Activities: React.FC<Props> = ({ isLoggedIn }) => {

    const [activities, setActivities] = useState<IActivity[]>([]);

    useEffect(() => {
        fetch('http://localhost:4000/activities')
            .then(res => {
                if(!res.ok) {
                    alert("Error al cargar actividades.")
                    return;
                }
                return res.json();
            })
            .then((data) => setActivities(data as IActivity[]))
            .catch(error => console.log(error));
    }, []);

    return (
        <Fragment>
            {activities.map((activity) => (
                <Card
                    key={activity.name}
                    name={activity.name}
                    description={activity.description}
                    schedules={activity.schedules}
                    isLoggedIn={isLoggedIn}
                />
            ))}
        </Fragment>
    );
}

export default Activities;
