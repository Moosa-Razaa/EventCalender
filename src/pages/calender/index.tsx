import { format } from "date-fns";
import { Col, Row, Typography } from 'antd';
import style from "./style.module.css";

const { Title } = Typography;

const gridRowStyles: React.CSSProperties = {
    height: "150px",
    marginTop: "50px"
}

const gridDaysOfWeekStyles: React.CSSProperties = {
    height: "100%",
    width: "100%",
    textAlign: "center",
    verticalAlign: "middle"
}

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
                <Row style={gridRowStyles} align="middle" justify="space-between" gutter={[4, 4]}>
                    {
                        daysOfWeek.map((currentDay) => { 
                            return <Col span={3} key={currentDay} style={gridDaysOfWeekStyles}>
                                <div className={style["daysDiv"]}>
                                    <Title style={{ color: "#3A4750"}} level={3}>{currentDay}</Title>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </main>
        </div>
    );
}