import { useState } from "react";
import { Button } from "antd";

function Event()
{
    const [_, setOpenModal] = useState<boolean>(false);

    return(
        <>
            <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
        </>
    );
}

export default Event;