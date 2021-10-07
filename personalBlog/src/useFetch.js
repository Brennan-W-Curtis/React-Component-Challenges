import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [ data, setData ] = useState(null);
    const [ isPending, setIsPending ] = useState(true);
    const [ error, setError ] = useState(null);
    
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(response => {
                    if (!response.ok) {
                        throw Error("Could not fetch the data from that resource.");
                    }
                    return response.json();
                })
                .then(data => {
                    setData(data); 
                    setIsPending(false);
                    setError(null);
                })
                .catch(error => {
                    if (error.name === "AbortError") {
                        console.log("Fetch aborted.");
                    } else {
                        setError(error.message);
                        setIsPending(false);
                    }
                })
        }, 0);
        return () => abortCont.abort();
    //An empty dependency array ensures this hook only invokes the function after the first initial render
    }, [url]);

    return { data, isPending, error };
}

//To run the JSON Server run this command, npx json-server --watch data/database.json --port 8000
export default useFetch;