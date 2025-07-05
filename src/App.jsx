
import List from './List.jsx';

function App() {

  const fruits=[{id:1, name:"apple", calories:1},
              {id:2, name:"orange", calories:3},
              {id:3, name:"banana", calories:2},
              {id:4, name:"pineapple", calories:4},
              {id:5, name:"goa", calories:5} 
             ];

   const vegetables=[{id:6, name:"carrot", calories:1},
              {id:7, name:"okra", calories:3},
              {id:8, name:"cucumber", calories:2},
              {id:9, name:"cabbage", calories:4},
              {id:10, name:"beans", calories:5} 
             ];             

  return(
    <>
    {fruits.length>0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length>0 && <List items={vegetables} category="Vegetables"/>}
    </>
  );
 
}

export default App
