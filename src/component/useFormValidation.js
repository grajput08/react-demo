import { useState } from "react";

const useFormValidation = () => {
    const [error, SetError] = useState({});
    const validate = (data) => {
        let error = {}
        if (!data.name.trim()) {
            error = { ...error, name: "Please enter the name" }
        }

        if (!data.City.trim()) {
            error = { ...error, City: "Please enter the city" }
        }

        if (!data.Address.trim()) {
            error = { ...error, Address: "Please enter the Address" }
        }

        SetError(error);
        return Object.keys(error).length === 0;
    }

    const resetError = () => {
        SetError("");
    }
    return [error, validate, resetError];

}
export default useFormValidation;