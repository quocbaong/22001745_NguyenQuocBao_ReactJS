import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEvent, editEvent, deleteEvent } from '../features/eventSlice';

function EventManagement() {
  const events = useSelector((state) => state.event.events);
  const dispatch = useDispatch();
  const [newEvent, setNewEvent] = useState({ title: '', date: '' });
  const [editId, setEditId] = useState(null);

  const handleAddOrEdit = () => {
    if (newEvent.title && newEvent.date) {
      if (editId) {
        dispatch(editEvent({ id: editId, ...newEvent }));
        setEditId(null);
      } else {
        dispatch(addEvent(newEvent));
      }
      setNewEvent({ title: '', date: '' });
    }
  };

  const handleEdit = (event) => {
    setEditId(event.id);
    setNewEvent({ title: event.title, date: event.date });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Event Management</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="border p-2 rounded mr-2 dark:bg-gray-700 dark:text-white"
          placeholder="Event title"
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          className="border p-2 rounded mr-2 dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={handleAddOrEdit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editId ? 'Update' : 'Add'} Event
        </button>
      </div>
      <ul className="space-y-2">
        {events.map((event) => (
          <li key={event.id} className="flex justify-between items-center dark:text-white">
            <span>
              {event.title} - {event.date}
            </span>
            <div>
              <button
                onClick={() => handleEdit(event)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteEvent(event.id))}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventManagement;