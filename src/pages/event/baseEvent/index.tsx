import { Button, DatePicker, Form, Input, Modal } from "antd";
import style from "./createEvent.module.css";
import { EventDetails, EventStatus } from "../utils";

const modalTitle = "Create New Event";
const modalOkText = "Create Event";

type Props = 
{
    openModal: boolean,
    setOpenModal: (a: boolean) => void,
} & ({
    eventStatus: EventStatus.CREATE,
} | {
    eventStatus: Exclude<EventStatus, EventStatus.CREATE>,
    eventDetails: EventDetails
});

enum FromFieldNames
{
    EVENTNAME = "EventName",
    DESCRIPTION = "Description",
    SCHEDULEDDATE = "SCHEDULEDDATE"
}

const {TextArea} = Input;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

function BaseEvent(props : Props)
{
    const [form] = Form.useForm();

    function InitializeValuesToForm()
    {
        if(props.eventStatus !== EventStatus.CREATE)
        {
            form.setFieldsValue({
                [FromFieldNames.EVENTNAME]: props.eventDetails.eventName,
                [FromFieldNames.DESCRIPTION]: props.eventDetails.description,
                [FromFieldNames.SCHEDULEDDATE]: props.eventDetails.scheduledDate
            });
        }
        else
        {
            form.resetFields();
        }
    }

    InitializeValuesToForm();

    function ModalOnCancelHandler()
    {
        form.resetFields();
        props.setOpenModal(false);
    }

    return(
        <Modal
            title={modalTitle}
            centered={true}
            open={props.openModal}
            onCancel={ModalOnCancelHandler}
            okText={modalOkText}
            width={750}
            footer={null}
        >
            <Form {...layout} form={form} style={{ width: 600 }}>
                <Form.Item name={FromFieldNames.EVENTNAME} label="Name" required={true}>
                    <Input />
                </Form.Item>

                <Form.Item name={FromFieldNames.SCHEDULEDDATE} label="Scheduled Date" required={true}>
                    <DatePicker className={style["datePicker"]} />
                </Form.Item>

                <Form.Item name={FromFieldNames.DESCRIPTION} label="Description">
                    <TextArea
                        showCount={true}
                        maxLength={100}
                        placeholder="description"
                        style={{ resize: "none", height: 120 }}
                    />                    
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default BaseEvent;