import React, { useState, useEffect } from "react";
import explorer from "./component/fileExplore/data";
import Folder from "./component/fileExplore/folder";

const ExploreFile = () => {

    const [data, setData] = useState(explorer);

    useEffect(() => {
        setData(explorer);
    }, [explorer]);
    return (
        <div className="container">
            <Folder explore={data} />
        </div>
    );
}

export default ExploreFile;