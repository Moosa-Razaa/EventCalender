import { endOfMonth, format, startOfMonth } from "date-fns";
import { Typography } from 'antd';
import style from "./style.module.css";

const { Title, Text } = Typography;

const daysOfWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function Calender()
{
    const dateOfToday = new Date();
    const monthAndYear = format(dateOfToday, "MMMM yyyy");
    const lastDateOfMonth = endOfMonth(dateOfToday).getDate();
    const firstDayOfMonth = startOfMonth(dateOfToday).getDay();
    const offsetForCalender = Array.from({length: firstDayOfMonth}, (_) => "-");
    const daysOfMonth = [...offsetForCalender, ...Array.from({length: lastDateOfMonth}, (_, index) => (index + 1).toString())];

    return(
        <div className={style["mainCalenderDiv"]}>
            <header className={style["mainMonthAndYearHeading"]}>
                <div className={style["mainHeaderDiv"]}>
                    <Title style={{ color: "#D3D6DB" }}>{monthAndYear}</Title>
                </div>
            </header>

            <main className={style["main"]}>       
                <div className={style["weekdaysGrid"]}>
                    {
                        daysOfWeek.map((currentDay) => <div key={currentDay} className={style["inidividualDay"]}><Title level={3}>
                            {currentDay}
                        </Title></div>)
                    }
                    {
                        daysOfMonth.map((currentDate, index) => 
                            <div key={index} className={style["individualDate"]}>
                                {
                                    dateOfToday.getDate() === +currentDate ? 
                                    <div className={style["currentDate"]}>
                                        <Text strong={true} >{currentDate}</Text>
                                    </div> : 
                                    <Title level={5}>{currentDate}</Title>
                                }
                            </div>
                        )
                    }
                </div>
            </main>
        </div>
    );
}