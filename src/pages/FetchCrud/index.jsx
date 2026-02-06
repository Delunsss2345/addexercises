import { useCallback, useEffect, useState } from "react";

const API = "http://localhost:3001/todos";

export default function FetchCrud() {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState("");

    const fetchItems = useCallback(() => {
        fetch(API)
            .then((r) => r.json())
            .then(setItems)
            .catch(e => console.log(e))
    }, []);
    useEffect(() => {
        if (fetchItems) {
            fetchItems()
        }
    }, [fetchItems])

    const add = () => {
        if (!title.trim()) return;

        fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: title.trim(), done: false }),
        })
            .then((r) => r.json())
            .then((created) => {
                setItems((prev) => [created, ...prev]);
                setTitle("");
            })
            .catch((e) => alert(e.message));
    };

    const toggle = (id, done) => {
        fetch(`${API}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ done: !done }),
        })
            .then((r) => r.json())
            .then((updated) => {
                setItems((prev) => prev.map((x) => (x.id === id ? updated : x)));
            })
            .catch((e) => alert(e.message));
    };

    const remove = (id) => {
        fetch(`${API}/${id}`, { method: "DELETE" })
            .then(() => setItems((prev) => prev.filter((x) => x.id !== id)))
            .catch((e) => alert(e.message));
    };

    return (
        <div>
            <h2>Fetch CRUD (then)</h2>

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
