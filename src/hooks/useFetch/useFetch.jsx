import { useEffect, useState } from 'react';


const useFetch = (url, reFetch) => {
    const [data, setData] = useState('');
    const [error, setError] = useState('');
   
    const fetchData = async () => {

        if (typeof url === Array) {
            console.log(url)
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
    }, [reFetch])

    return [data, error];
}

export default useFetch;