import Axios from "axios";
import { useEffect, useState } from "react";

export function ListExcercises() {
    const [excercises, setExcercises] = useState(['alfa', 'beta']);

    useEffect(() => {
        Axios.get('http://localhost:8888/api/getExcercises').then(result => {
            setExcercises(result.data.map((e: any) => e.name));
        });
    }, []);

    return (
        <div>
            {excercises.map(e => <div key={e}>{e}</div>)}
        </div>
    )
}