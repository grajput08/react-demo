import { useState } from "react";

const useFormState = () => {
    const [data, setData] = useState({
        name: "",
        Address: "",
        City: ""
    });

    const resetData = () => {
        setData({
            name: "",
            Address: "",
            City: ""
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    return [data, handleChange, resetData];

}
export default useFormState;