import { useState } from 'react';
import './Todo.css';
export default function App() {
  const [cur, setCur] = useState("");
  const [err, setErr] = useState("");
  const [all, setAll] = useState([]);
  const [done, setDone] = useState([]);
  const [rem, setRem] = useState(0);
  const [count, setCount] = useState(0);
  const add = () => {
    if (cur.trim() === "") {
      setErr("Enter Tasks Properly!");
    }
    else {
      setErr("");
      let temp = [...all, cur];
      console.log(temp);
      setAll(temp);
      setCount(count + 1);
      setRem(rem + 1);
      setCur("");
    }
  }
  const dele = (task) => {
    let tempAll = [...all];
    let tempDone = [...done];
    const taskIndex = tempAll.indexOf(task);
    if (taskIndex !== -1 && !tempDone.includes(task)) setRem(rem - 1);
    if (taskIndex !== -1) {
      tempAll.splice(taskIndex, 1);
      setAll(tempAll);
      setDone(tempDone);
      setCount(count - 1);
    }
  };
  const doneb = (task) => {
    let tempD = [...done];
    const taskIndex = tempD.indexOf(task);
    if (taskIndex !== -1) {
      tempD.splice(taskIndex, 1);
      setDone(tempD);
      console.log(tempD);
      setRem(rem + 1);
    } else {
      setDone([...tempD, task]);
      console.log([...tempD, task]);
      setRem(rem - 1);
    }
  };
  const enter = (e) => {
    if (e.keyCode === 13) add();
  }
  return (
    <div className='bckgnd'>
      <h1 className='Hdng'>Todo App</h1>
      <p className='inp'><input type='text' value={cur} onChange={(e) => setCur(e.target.value)} onKeyDown={enter} className='txtbx' placeholder='What Task Needs To Be Done ?' /><button className='btn' onClick={add}>Add</button>
        <h5 className='error'>{err}</h5></p>
      <table className='tbl'>
        <tr><td><p className='at'>All Tasks :</p></td></tr>
        <ol> {all.map((task, index) => (<>
            <tr className={done.includes(task) ? 'deleted-row' : ''}>
              <td><li></li></td>
              <td className='del'>{task}</td>
              <td className='delb'>
                <button onClick={() => doneb(task)} className='delbtn'>
                  {done.includes(task) ? 'Undo' : 'Done'}
                </button>
              </td>
              <td className='delb'>
                <button onClick={() => dele(task)} className='delbtn'>
                  Delete
                </button>
              </td>
            </tr>
            <hr className='bline' /></>))}
        </ol>
        <tr><td><h3 className='ftr'>Remaining Tasks : {rem}</h3></td></tr>
        <tr><td><h3 className='ftr'>Total Tasks : {count}</h3></td></tr>
      </table>
    </div>
  )
}

// import './App.css';
// import { useState } from 'react';
// export default function App() {
//   const [cur, setCur] = useState("");
//   const [all, setAll] = useState([]);
//   const [count, setCount] = useState(0);
//   const add = () => {
//       let temp = [...all, cur];
//       setAll(temp);
//       setCount(count + 1);
//   }
//   const dele = (task) => {
//     let tempAll = [...all];
//     const taskIndex = tempAll.indexOf(task);
//     if (taskIndex !== -1) {
//       tempAll.splice(taskIndex, 1);
//       setAll(tempAll);
//       setCount(count - 1);
//     }
//   };
//   return (
//     <div>
//       <h1>Todo App</h1>
//       <p>Enter Task<input type='text' value={cur} onChange={(e) =>
//         setCur(e.target.value)}/><button onClick={add}>Add</button>
//       </p>
//       <table>
//         <tr><td><p>All Tasks :</p></td></tr>
//         <ol> {all.map((task) => (<>
//           <tr>
//             <td><li></li></td>
//             <td>{task}</td>
//             <td>
//               <button onClick={() => dele(task)}>
//                 Delete
//               </button>
//             </td>
//           </tr></>))}
//         </ol>
//         <tr><td><h3>Total Tasks : {count}</h3></td></tr>
//       </table>
//     </div>
//   )
// }
