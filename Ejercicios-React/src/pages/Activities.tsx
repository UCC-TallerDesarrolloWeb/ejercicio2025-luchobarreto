import { Fragment } from "react";
import Card from "@components/Card";

interface Props {
    isLoggedIn: boolean;
}


const activities = [
    {
        name: "taekwondo",
        description: "Arte marcial coreana",
        schedules: [
            { day: 2, startTime: "18:30", endTime: "20:00" },
            { day: 4, startTime: "18:30", endTime: "20:00" }
        ]
    },
    {
        name: "zumba",
        description: "ritmos latinos",
        schedules: [
            { day: 1, startTime: "19:30", endTime: "20:30" },
            { day: 3, startTime: "19:30", endTime: "20:30" }
        ]
    }
];

const Activities: React.FC<Props> = ({ isLoggedIn }) => {
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
