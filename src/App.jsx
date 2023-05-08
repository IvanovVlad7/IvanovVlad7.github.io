
// function App() {
//   const [count, setCount] = useState('');
//   const [arr, setArr] = useState([]);

import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useEffect, useRef, useState } from "react";
import Header from "./component/Header/Header";
import AddTodo from "./component/AddTodo/AddTodo";
import TodoList from "./component/TodoList/TodoList";




//   useEffect(() => {
//     if (count) {
//       fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=0`) 
//         .then(response => response.json())
//         .then(result => setArr(result))
//     }
//   }, [count]);


//   return (
//     <div>       
//       <input value={count} onChange={(event) => setCount(event.target.value)} />
//       {arr?.results?.map((item) => item.name)}
//     </div>
//   );
// }


















// const App = () => {
//   const [data, setData] = useState();

//   const getResolve = () => {
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
//       .then(responce => {
//         if (responce.ok) {
//           alert('Success')
//           return responce.json();
//         } else {
//           alert('fail')
//         }
//       })
//       .then(json => {
//         handle(json); 
//         setData(json)
//       })
//   }





//   return (
//     <div>
//       <button onClick={() => getResolve()}>click</button>
//       {data?.results.map(item => item.name)}
//     </div>
//   )
// }


// const App = () => {
//     const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.target;
//     console.log('email', form.email, form.elements.email);
//     console.log('name', form.name, form.elements.name);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="email">Email address</label>
//         <input
//           id="email"
//           name="email"
//         />
//       </div>
//       <div>
//         <label htmlFor="name">Full Name</label>
//         <input
//           id="name"
//           name="name"
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }



// event.preventDefault();
//     const form = e.target;
//     console.log('email', form.email, form.elements.email);
//     console.log('name', form.name, form.elements.name);




// const App = () => {

//   const [display, setDisplay] = useState()



// const handleSubmit = (event) => {
//   event.preventDefault()
//   const form = event.target;

//   setDisplay([form.name.value, form.surname.value, form.email.value, form.password.value])

// }




//   return (
//     <div>
//       <form onSubmit={handleSubmit} >

//         <label>
//           <input type='text' name='name' placeholder='name' />
//         </label>
//         <br />
//         <label>
//           <input type='text' name='surname' placeholder='surname' />
//         </label>
//         <br />
//         <label>
//           <input type='text' name='email' placeholder='email' />

//         </label>
//         <br />
//         <label>
//           <input type='text' name='password' placeholder='password' />
//         </label>
//         <br />
//         <input type="submit" />
//       </form> 
//       {display?.map((item) => item)}
//     </div>
//   )
// }




// const App = () => {
//   const[arr,setArr] =useState([])

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     const task = event.target.task.value;
//     const description = event.target.description.value;
//     const work = event.target.work.value;


//     setArr([{
//       description,
//       task,
//       work
//     }])
//   }





//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         Task Name:
//         <input type="text" name='task' />
//         <br />
//         Task Description:
//         <input type="text" name='description' />
//         <br />
//         Task Type:
//         <select name="work">
//           <option value='work'>Work</option>
//           <option value='rest'>Rest</option>
//         </select>
//         <div>
//           <input type="submit"></input>
//         </div>
//         <div>
//           {/* Card: <Cards description={description} task={task} rest={rest}/> */}
//           {arr.map((item) => <Cards description = {item.description} task = {item.task} rest={item.work}/> )}
//         </div>
//       </form>
//     </div>
//   )
// }
// // пробежаться по массиву и на каждый элемент массива отобразить компонент карточка со значениями из элемента массива 



// const App = () => {
//   const ref = useRef('')
//   const ref1 = useRef('')
//   const ref2 = useRef('')


//   const handleFocus = () => {
//     console.log(ref.current.firstChild.data)
//     console.log(ref1.current.firstChild.data)
//     console.log(ref2.current.firstChild.data)
//   }


//   return (
//     <div>
//       <div ref={ref}>text a</div>
//       <div ref={ref1}>text b</div>
//       <div ref={ref2}>text c</div>
//       <button onClick={handleFocus}>Get data</button>
//     </div>
//   )
// }



// const TodoList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [currentTask, setCurrentTask] = useState('');

//   const handleInputChange = (event) => {
//     setCurrentTask(event.target.value);
//   };

//   const handleAddTask = () => {
//     if (currentTask.trim() !== '') {
//       console.log(tasks)
//       console.log(currentTask)
//       setTasks([...tasks, currentTask]); // +-   setTasks((prevTask) => [...prevTasks, currentTask])
//       setCurrentTask('');
//     }
//   };

//   const handleDeleteTask = (index) => {
//     const newTasks = [...tasks]; // ?
//     newTasks.splice(index, 1); // -
//     setTasks(newTasks);
//   };

//   const handleEditTask = (index, newTask) => {
//     const newTasks = [...tasks]; // ?
//     newTasks[index] = newTask;
//     setTasks(newTasks);
//   };


//   return (
//     <div>
//       <h2>Todo List</h2>
//       <input
//         type="text"
//         placeholder="введите задачу"
//         value={currentTask}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleAddTask}>добавить задачу</button>
//       <ul>
//         {tasks.map((task, index) => (  // key - (reate id for each task, use Id for key)
//           <li key={task.id}>
//             <input
//               type="text"
//               defaultValue={task.id}
//               onBlur={(event) => handleEditTask(index,event.target.value)}
//             />
//             <button onClick={() => handleDeleteTask(index)}>удалить задачу</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// export default TodoList;\



const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: true
    },
    {
      id: 2,
      title: 'second todo',
      status: true
    },
    {
      id: 3,
      title: 'third todo',
      status: false
    }
  ])

  return (
    <div>
      <Header />
      <AddTodo setTodo={setTodo} todo={todo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default App




