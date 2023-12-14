import { useState } from "react";
import CreateEvent from "./structure";
import { Button } from "antd";

function Event()
{
    const [openModal, setOpenModal] = useState<boolean>(false);

    return(
        <>
        <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
            <CreateEvent openModal={openModal} setOpenModal={setOpenModal} eventName="" description="" scheduledDate={new Date()} />
        </>
    );
}

export default Event;