import { Button, Form, Input, Modal } from "antd";

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
    DATE = "Date",
    
}

function CreateEvent({openModal, setOpenModal} : Props)
{
    const [form] = Form.useForm();

    function OnFormFinish()
    {
        console.log("Name : ", form.getFieldValue("name"));
    }

    function ModalOnCancelHandler()
    {
        setOpenModal(false);
    }

    return(
        <Modal
            title={modalTitle}
            centered={true}
            open={openModal}
            onCancel={ModalOnCancelHandler}
            okText={modalOkText}
        >
            <Form form={form} onFinish={OnFormFinish}>
                <Form.Item name="name" label="Name" required={true} preserve={false}>
                    <Input />
                </Form.Item>

                <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default CreateEvent;