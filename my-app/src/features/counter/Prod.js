import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProds, getDataAsync, delDataAsync, addDataAsync, updDataAsync } from './prodSlice';

export function Prod() {
    const prods = useSelector(selectProds);
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false);
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);

    useEffect(() => {
        dispatch(getDataAsync())
    }, [dispatch, refresh])

    const handleDel = (id) => {
        console.log(id);
        dispatch(delDataAsync(id))
        setRefresh(!refresh)
    }

    const handleAdd = (newData) => { 
        dispatch(addDataAsync(newData))
        setRefresh(!refresh)
    }

    const handleUpd = (id) => {
        console.log(id);
        dispatch(updDataAsync({ desc, price, id }))
        setRefresh(!refresh)
    }

    return (
        <div>
            {prods.length}
                {prods.map((prod) => (
                    <div key={prod.id}>
                        {prod.desc}
                        <button onClick={() => handleDel(prod.id)}>delete</button>
                        <button onClick={() => handleUpd(prod.id)}>Update</button>
                        
                    </div>
                ))
            }
            <div>
                desc:<input onChange={(e) => setDesc(e.target.value)} />
                price:<input onChange={(e) => setPrice(e.target.value)} />
                <button onClick={() => handleAdd({ desc, price })}>Add a product</button>
            </div>
        </div>
    );
}
