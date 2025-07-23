import React, { useState, useEffect } from "react";

const TodoAPP = () => {

    const [data, setData] = useState([{
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }]);
    const [nextId, setNextId] = useState(2);
    const [text, setText] = useState("");

    const submitHandle = () => {
        const NewData = {
            "id": nextId,
            "title": text,
            "completed": false
        }
        setData([...data, NewData]);
        setText('');
        setNextId(nextId + 1);


    };

    const toggleDone = (id) => {
        const updatedData = data.map((val) => val.id === id ? { ...val, completed: !val.completed } : val);
        setData(updatedData);

    };

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <div className="container m-4">
            <h1 className="text-center mb-4">Todo APP</h1>
            <div className="row">
                <div className="col-12">
                    <input className="me-2 w-75" type="text" placeholder="Enter the task" value={text} onChange={(e) => setText(e.target.value)} />
                    <button className="btn btn-primary" onClick={submitHandle}>Submit</button>
                </div>
                <div className="col-12 ">
                    <h2 className="mt-4">List Of Tasks</h2>
                    <div className="">

                        {data.map((val) =>
                            <div>
                                <input className="m-2" type="checkbox" checked={val.completed} onChange={() => toggleDone(val.id)} />
                                <span className={`${val?.completed ? 'text-decoration-line-through' : "text-decoration-none"}`}>{val?.title}</span>
                            </div>
                        )}
                    </div>
                </div>

            </div>


        </div>
    );
}
export default TodoAPP;