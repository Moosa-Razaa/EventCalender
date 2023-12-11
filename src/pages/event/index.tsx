import { useState } from "react";
import CreateEvent from "./create";
import { Button } from "antd";

function Event()
{
    const [openModal, setOpenModal] = useState<boolean>(false);

    return(
        <>
        <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
            <CreateEvent openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
}

export default Event;