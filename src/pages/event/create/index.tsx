import { Button, DatePicker, Form, Input, Modal } from "antd";
import style from "./createEvent.module.css";

const modalTitle = "Create New Event";
const modalOkText = "Create Event";

type Props = 
{
    openModal: boolean,
    setOpenModal: (a: boolean) => void
}

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

function CreateEvent({openModal, setOpenModal} : Props)
{
    const [form] = Form.useForm();

    function ModalOnCancelHandler()
    {
        form.resetFields();
        setOpenModal(false);
    }

    return(
        <Modal
            title={modalTitle}
            centered={true}
            open={openModal}
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

export default CreateEvent;