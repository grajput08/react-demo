import React from "react";
import useMessageTimeout from "./component/useMessageTimeout";
import useFormValidation from "./component/useFormValidation";
import useFormState from "./component/useFormState";

const Forms = () => {
    const [data, handleChange, resetData] = useFormState();
    const [errors, validate, resetErrors] = useFormValidation();
    const [message, showMessage] = useMessageTimeout(2000);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate(data)) {
            resetErrors();
            resetData();
            showMessage('Contact Details send Successfully!')
        }
    }


    return (
        <div className="container">
            <h1 className="mt-2 text-xl font-semibold">Contact Details</h1>
            <form className="pt-2" onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label className="mb-2">Name:</label>
                    <input className="form-control" type="text" name="name" value={data.name} onChange={handleChange} />
                    {errors.name && <span className="text-danger">{errors.name}</span>}
                </div>
                <div className="mb-2">
                    <label className="mb-2">city:</label>
                    <input className="form-control" type="text" name="City" value={data.City} onChange={handleChange} />
                    {errors.City && <span className="text-danger">{errors.City}</span>}
                </div>
                <div className="mb-2">
                    <label className="mb-2">Address:</label>
                    <textarea className="form-control" type="text" name="Address" value={data.Address} onChange={handleChange} />
                    {errors.Address && <span className="text-danger">{errors.Address}</span>}
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form >
            <span className="text-success">{message}</span>
        </div >
    )
}

export default Forms;