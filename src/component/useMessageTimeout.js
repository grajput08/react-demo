import { useState } from "react";

const useMessageTimeout = (timeout = 2000) => {
    const [message, setMessage] = useState("");
    const showMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => {
            setMessage("");
        }, timeout);
    }
    return [message, showMessage];

}
export default useMessageTimeout;