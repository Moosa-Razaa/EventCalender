import { useState } from "react";
import BaseEvent from "../baseEvent";
import { EventStatus } from "../utils";

function CreateEvent()
{
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    
    return(
        <>
            <BaseEvent openModal={isModalOpen} setOpenModal={setIsModalOpen} eventStatus={EventStatus.CREATE} />
        </>
    );
}

export default CreateEvent;