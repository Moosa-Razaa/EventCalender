import style from "./style.module.css";
import { endOfMonth, format, startOfMonth } from "date-fns";
import { List, Typography } from "antd";
import addNewEvent from "../../assets/addNewEvent.svg";
import { useState } from "react";
import { EventDetails } from "../event/utils";

const daysOfWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const { Title, Text } = Typography;

const generateDummyEventDetails = (index: number): EventDetails => ({
    eventName: `Event ${index + 1}`,
    description: `Description for Event ${index + 1}`,
    scheduledDate: new Date() // You can replace this with your desired date logic
});
  
  // Create an array with 10 dummy EventDetails
const dummyEventDetailsArray: EventDetails[] = Array.from({ length: 10 }, (_, index) =>
    generateDummyEventDetails(index)
);

export default function Calender()
{
    const [allEvents, _] = useState<EventDetails[]>(dummyEventDetailsArray);

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
                
                <div className={style["addNewEvent"]}>
                    <Text type="secondary">No Date Selected!</Text>
                    <button className={style["addNewEventButton"]} title="Add new event">
                        <img src={addNewEvent} alt="Add Event" className={style["addEventIcon"]} />
                    </button>
                </div>
                
                <div className={style["horizontalDiv"]} />
                
                <div className={style["eventsList"]}>
                    <List
                        size="small"
                        dataSource={allEvents}
                        header={<Title level={5}>Events</Title>}
                        bordered={true}
                        renderItem={(currentItem) => <List.Item>{currentItem.eventName}</List.Item>} 
                    />
                </div>
            </div>
        </main>
    );
}