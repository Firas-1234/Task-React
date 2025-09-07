import { useState } from 'react';
const TaskTest = () => {
    // tulisan kalau state true mka open
    // if state false maka close

    // to do work
    // di awal state true
    // buat function 
    // jika tombol di klik ganti state

    const [isOpen, setIsOpen] = useState(true);
    const handleToogle = () => {
        setIsOpen(!isOpen);

        // !True= False
        // !False= True 
    };

    const buttonText = isOpen ? "Tutup" : "Buka";

    // value 2 input taruh di alert ketika di submit
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");

    const handleInput = (event, inputKe) => {
      switch (inputKe) {
        case 1:
          setInput1(event.target.value);
          break;
          case 2:
          setInput2(event.target.value);
          break;
          case 3:
          setInput3(event.target.value);
          break;
          default:
            setInput1("");
      }
    };

    const handleSubmit = () => {
        alert("Input 1: " + input1 + "\nInput 2: " + input2 + "\ninput 3: " + input3);
    };

    return (
        <div>
            <h1>Test komponen Task</h1>

            <input 
                type="text" 
                placeholder="Input pertama"
                value={input1}
                onChange={(e) => handleInput(e, 1)}
            />
            <input 
                type="text" 
                placeholder="Input kedua"
                value={input2}
               onChange={(e) => handleInput(e, 2)}
            />
             <input 
                type="text" 
                placeholder="Input ketiga"
                value={input3}
               onChange={(e) => handleInput(e, 3)}
            />

            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleToogle}>{buttonText}</button>
        </div>
    );
};

export default TaskTest;