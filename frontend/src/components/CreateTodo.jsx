import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    try {
      const res = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" // ✅ Correct header
        },
        body: JSON.stringify({ title, description })
      });

      if (!res.ok) throw new Error("Failed to add todo");

      const data = await res.json();
      alert("Todo added");

      // Clear input fields
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
      alert("Error adding todo");
    }
  };

  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Title"
        value={title} // ✅ Controlled input
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Description"
        value={description} // ✅ Controlled input
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button style={{ padding: 10, margin: 10 }} onClick={handleAddTodo}>
        Add a todo
      </button>
    </div>
  );
}
