import { useEffect, useState } from 'react';


const useFetch = (url, refetch) => {
    const [data, setData] = useState('');
    const [error, setError] = useState('');


    const fetchData = async () => {

        if (Array.isArray(url)) {

            try {
                const objData = await Promise.all(url.map(async url => {
                    let data = await fetch(url);
                    data = await data.json();
                    return data;
                }));
                setData(objData)
            } catch (error) {
                setError(`${error}`)
            }

        } else {

            try {
                let data = await fetch(url);
                data = await data.json();
                setData(data);

            } catch (error) {
                setError(`${error}`)
            }
        }
    };


    useEffect(() => {
        setData('');
        setError('');

        fetchData()
    }, [refetch])

    return [data, error];
}

export default useFetch;