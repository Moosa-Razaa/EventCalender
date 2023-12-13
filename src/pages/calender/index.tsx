import { format } from "date-fns";
import { Typography } from 'antd';
import style from "./style.module.css";

const { Title } = Typography;

const daysOfWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function Calender()
{
    const currentDate = new Date();
    const monthAndYear = format(currentDate, "MMMM yyyy");

    return(
        <div className={style["mainCalenderDiv"]}>
            <header className={style["mainMonthAndYearHeading"]}>
                <div className={style["mainHeaderDiv"]}>
                    <Title style={{ color: "#D3D6DB" }}>{monthAndYear}</Title>
                </div>
            </header>

            <main>       
                <div className={style["weekdaysGrid"]}>
                    {
                        daysOfWeek.map((currentDay) => <div className={style["inidividualDay"]}>{currentDay}</div>)
                    }
                </div>
            </main>
        </div>
    );
}