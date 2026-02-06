import { useCallback, useEffect, useState } from "react";

const API = "http://localhost:3001/todos";

export default function AsyncCrud() {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState("");

    const fetchItems = useCallback(async () => {
        try {
            const r = await fetch(API);
            if (!r.ok) throw new Error("Fetch items failed");
            const data = await r.json();
            setItems(data);
        } catch (e) {
            console.log(e);
        }
    }, []);

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    const add = async () => {
        try {
            if (!title.trim()) return;

            const r = await fetch(API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: title.trim(), done: false }),
            });
            if (!r.ok) throw new Error("Add failed");

            const created = await r.json();
            setItems((prev) => [created, ...prev]);
            setTitle("");
        } catch (e) {
            alert(e.message);
        }
    };

    const toggle = async (id, done) => {
        try {
            const r = await fetch(`${API}/${id}`, {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ done: !done }),
            });
            if (!r.ok) throw new Error("Toggle failed");

            const updated = await r.json();
            setItems((prev) => prev.map((x) => (x.id === id ? updated : x)));
        } catch (e) {
            alert(e.message);
        }
    };

    const remove = async (id) => {
        try {
            const r = await fetch(`${API}/${id}`, { method: "DELETE" });
            if (!r.ok) throw new Error("Delete failed");

            setItems((prev) => prev.filter((x) => x.id !== id));
        } catch (e) {
            alert(e.message);
        }
    };

    return (
        <div>
            <h2>Async CRUD</h2>

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
                        [{t.done ? "x" : " "}] {t.title}{" "}
                        <button onClick={() => toggle(t.id, t.done)}>Toggle</button>
                        <button onClick={() => remove(t.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
