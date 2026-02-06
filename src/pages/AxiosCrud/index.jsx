import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/todos'
})
export default function AxiosCrud() {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState("");

    const fetchItems = useCallback(async () => {
        try {
            const r = await axiosInstance.get();
            if (r.statusText !== 'OK') throw Error('Fetch items failed')
            setItems(r.data);
        }
        catch (e) {
            console.log(e);
        }
    }, []);

    useEffect(() => {
        fetchItems()
    }, [fetchItems])

    const add = async () => {
        if (!title.trim()) return;
        try {
            const r = await axiosInstance.post('/', {
                title: title.trim(),
                done: false
            });
            if (r.statusText !== 'OK') throw Error('Fetch items added')

            setItems(prev => {
                return [
                    r.data, ...prev
                ]
            });
            setTitle("")
        }
        catch (e) {
            console.log(e);
        }

    };

    const toggle = async (id, done) => {
        try {
            const r = await axiosInstance.patch(`/${id}`, { done: !done });
            if (r.statusText !== 'OK') throw Error('Fetch items updated')
            const data = r.data;
            setItems(prev =>
                prev.map(x => ((x.id + '') === (data.id + '') ? data : x))
            );
        } catch (e) {
            console.log(e);
        }
    };

    const remove = async (id) => {
        try {
            const r = await axiosInstance.delete(`/${id}`);
            if (r.statusText !== 'OK') throw Error('Toggle failed')

            setItems((prev) => prev.filter((x) => x.id !== id));
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <h2>Axios CRUD</h2>

            <button onClick={fetchItems}>Load</button>

            <div>
                <input
                    placeholder="New todo..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={add}>Add</button>
            </div>

            <ul>
                {items.map((t) => (
                    <li key={t.id}>
                        [{t.done ? "x" : " "}] {t.title + ' '}
                        <button onClick={() => toggle(t.id, t.done)}>Toggle</button>
                        <button onClick={() => remove(t.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

