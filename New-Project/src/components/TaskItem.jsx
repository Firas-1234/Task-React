import '../styles/TaskItem.css';
import { useState } from 'react';

const TaskItem = ({ data, setData}) => {
  const [editId, setEditId] = useState(null);   // id yg lagi di edit
  const [editText, setEditText] = useState(''); // text baru

  const handleDelete = (id) => {
    // filter disini akan menghilangkan id yg di klik sehingga terhapus
    const filteredData = data.filter(item => item.id !== id);
    setData(filteredData);
  };

  const handleEdit = (id, title) => {
    setEditId(id);       // simpan id yg dipilih
    setEditText(title);  // isi input dgn text lama
  };

  const handleSave = (id) => {
    const newData = data.map(item =>
  item.id === id ? { ...item, title: editText } : item
);
    setData(newData);
    setEditId(null); // keluar dari mode edit
    setEditText('');
  };

  return (
    <div className="task-item">
      <h3>Tugas Hari Ini</h3>
      {data.map((item, index)=>( 
        <div 
          key={index} 
          style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
        > 
          {editId === item.id ? ( // ini lagi di dalam mode edit
            <>
              <input 
                type="text" 
                value={editText} // value text sebelmunya
                onChange={(e) => setEditText(e.target.value)} 
              />
              <button onClick={() => handleSave(item.id)}>Simpan</button>
            </>
          ) : (
            <>
              <label>{item.title}</label>
              <div>
                <input type="checkbox" />
                <button onClick={() => handleDelete(item.id)}>Hapus</button>
                <button onClick={() => handleEdit(item.id, item.title)}>Edit</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskItem;
