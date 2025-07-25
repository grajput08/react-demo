import React, { useEffect, useState } from "react";

const Folder = ({ explore }) => {

    const [data, setData] = useState(explore);
    const [expand, setExpand] = useState(false)

    const handleFolder = () => {
        // const NewFolder = {
        //     id: ` ${name}` - `1`,
        //     name: { name },
        //     isFolder: true,
        //     items: []
        // }
    }

    useEffect(() => {
        setData(explore);
    }, [explore]);

    return (
        <div className="ms-4">
            {data.isFolder ?
                <div className='p-2 mb-2 bg-opacity-50 bg-secondary text-white'>
                    <div className="row">
                        <div className="col-6">
                            <img className="img-fluid" height={5} width={25} src="https://img.icons8.com/?size=100&id=12160&format=png&color=000000" />
                            <span className="m-2">{data.name}</span>
                        </div>
                        <div className="col-6 text-end">
                            <button className="btn btn-primary me-2" onClick={handleFolder}>Folder</button>
                            <button className="btn btn-secondary">File</button>

                        </div>
                    </div>
                </div>
                :
                <div className='p-2 mb-2'>
                    <div className="row">
                        <div className="col-6">
                            <img className="img-fluid" height={5} width={25} src="https://img.icons8.com/?size=100&id=84001&format=png&color=000000" />
                            <span className="m-2">{data.name}</span>
                        </div>
                    </div>
                </div>
            }
            {data.items?.map((val) => <Folder explore={val} />)}
        </div >
    )

}
export default Folder;