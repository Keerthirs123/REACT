import React, { useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", roll: "", className: "" });
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add new student
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, roll, className } = form;

    if (!name || !roll || !className) {
      alert("All fields are required!");
      return;
    }

    const rollExists = students.some((s) => s.roll === roll);
    if (rollExists) {
      alert("Roll number must be unique!");
      return;
    }

    const newStudent = {
      id: students.length + 1,
      name,
      roll,
      className,
    };

    setStudents([...students, newStudent]);
    setForm({ name: "", roll: "", className: "" });
  };

  // Delete a student
  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // Start editing
  const handleEdit = (id) => {
    setEditId(id);
  };

  // Save edited student
  const handleSave = (id, updatedStudent) => {
    const { name, roll, className } = updatedStudent;
    if (!name || !roll || !className) {
      alert("All fields are required!");
      return;
    }

    const rollExists = students.some(
      (s) => s.roll === roll && s.id !== id
    );
    if (rollExists) {
      alert("Roll number must be unique!");
      return;
    }

    setStudents(
      students.map((s) => (s.id === id ? { ...s, ...updatedStudent } : s))
    );
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  // Search filter
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🎓 Student List Management (React SPA)
      </h1>

      {/* Add Student Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center gap-3 mb-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 border rounded w-40"
        /><br/>
        <input
          type="text"
          name="roll"
          placeholder="Roll Number"
          value={form.roll}
          onChange={handleChange}
          className="p-2 border rounded w-40"
        /><br/>
        <input
          type="text"
          name="className"
          placeholder="Class (e.g. 10A)"
          value={form.className}
          onChange={handleChange}
          className="p-2 border rounded w-40"
          
        /><br/>
        <button
          type="submit"
          className="bg-blue text-black px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Student
        </button>
      </form>

      {/* Search */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-60"
        />
      </div>

      {/* Student Table */}
      <div className="overflow-x-auto">
        {filteredStudents.length === 0 ? (
          <p className="text-center text-gray-500">No students found</p>
        ) : (
          <table className="min-w-full border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Roll Number</th>
                <th className="border p-2">Class</th>
                <th className="border p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((s) => (
                <tr key={s.id}>
                  <td className="border p-2 text-center">{s.id}</td>
                  <td className="border p-2">
                    {editId === s.id ? (
                      <input
                        type="text"
                        defaultValue={s.name}
                        onChange={(e) => (s.name = e.target.value)}
                        className="p-1 border rounded w-full"
                      />
                    ) : (
                      s.name
                    )}
                  </td>
                  <td className="border p-2">
                    {editId === s.id ? (
                      <input
                        type="text"
                        defaultValue={s.roll}
                        onChange={(e) => (s.roll = e.target.value)}
                        className="p-1 border rounded w-full"
                      />
                    ) : (
                      s.roll
                    )}
                  </td>
                  <td className="border p-2">
                    {editId === s.id ? (
                      <input
                        type="text"
                        defaultValue={s.className}
                        onChange={(e) => (s.className = e.target.value)}
                        className="p-1 border rounded w-full"
                      />
                    ) : (
                      s.className
                    )}
                  </td>
                  <td className="border p-2 text-center">
                    {editId === s.id ? (
                      <>
                        <button
                          onClick={() =>
                            handleSave(s.id, {
                              name: s.name,
                              roll: s.roll,
                              className: s.className,
                            })
                          }
                          className="bg-green-500 text-black px-3 py-1 rounded mr-2"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="bg-blue text-black px-3 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(s.id)}
                          className="bg-blue text-black px-3 py-1 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(s.id)}
                          className="bg-red-600 text-black px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
