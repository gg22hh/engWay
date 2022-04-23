import { useEffect, useState } from "react";

export const useDataFromServer = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getData = async () => {
            const response = await fetch(url);
            if (response.ok) {
                const json = await response.json();
                setData(json);
                setIsLoading(false);
            } else {
                console.log("error");
            }
        };
        getData();
    }, [url]);

    return [data, isLoading];
};
