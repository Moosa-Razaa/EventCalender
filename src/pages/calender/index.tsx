import style from "./style.module.css";
import { endOfMonth, format, startOfMonth } from "date-fns";
import { Typography } from "antd";
import addNewEvent from "../../assets/newEvent.svg";

const daysOfWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const { Title, Text } = Typography;

export default function Calender()
{
    const dateOfToday = new Date();
    const lastDateOfMonth = endOfMonth(dateOfToday).getDate();
    const firstDayOfMonth = startOfMonth(dateOfToday).getDay();
    const monthAndYear = format(dateOfToday, "MMMM yyyy");
    const currentDayOfWeek = format(dateOfToday, "EEEE");
    const date = dateOfToday.getDate();
    const offsetForCalender = Array.from({length: firstDayOfMonth}, (_) => "");
    const daysOfMonth = [...offsetForCalender, ...Array.from({length: lastDateOfMonth}, (_, index) => (index + 1).toString())];

    return(
        <main className={style["mainCalenderDiv"]}>
            <div className={style["calendarDiv"]}>
                <div className={style["weekdaysGrid"]}>
                    {
                        daysOfWeek.map((currentDay) => <div key={currentDay} className={style["individualDay"]}>
                            <Title style={{ color: "#F6F7D3" }} level={3}>
                                {currentDay}
                            </Title></div>
                        )
                    }
                    {
                        daysOfMonth.map((currentDate, index) => 
                            <div key={index} className={style["individualDate"]}>
                                {
                                    <Title level={5} style={{ color: "#F8FCEB" }}>{currentDate}</Title>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={style["currentDateDiv"]}>
                <div className={style["currentDateInformationDiv"]}>
                    <Title>{date}</Title>
                    <div className={style["verticalDiv"]} />
                    <div className={style["monthYearDayOfWeekDiv"]}>
                        <Text strong>{monthAndYear}</Text>
                        <Text strong>{currentDayOfWeek}</Text>
                    </div>
                </div>
                <div className={style["horizontalDiv"]} />
                <div className={style["eventsDiv"]}>
                    <div className={style["eventsHeadingDiv"]}>
                        <Title style={{ margin: 0, padding: 0}} level={4}>Scheduled Events</Title>
                        <img className={style["addNewEventImage"]} src={addNewEvent} alt="Add new event" />
                    </div>
                </div>
                <div className={style["horizontalDiv"]} />
            </div>
        </main>
    );
}