function List(){
//  const fruits = ["apple", "orange", "banana", "pineapple"];
const fruits=[{id:1, name:"apple", calories:1},
              {id:2, name:"orange", calories:3},
              {id:3, name:"banana", calories:2},
              {id:4, name:"pineapple", calories:4},
              {id:5, name:"goa", calories:5} 
             ];
// fruits.sort((a,b) => a.name.localeCompare(b.name));
//fruits.sort((a,b) => b.name.localeCompare(a.name));
//fruits.sort((a,b) => a.calories-b.calories);
//fruits.sort((a,b) => b.calories-a.calories);

//const lowCalFruits = fruits.filter(fruit => fruit.calories<2);
const lowCalFruits = fruits.filter(fruit => fruit.calories>3);

const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}> 
                                     {lowCalFruit.name}: &nbsp; {lowCalFruit.calories}</li>)
 return (
    <ol>
        {listItems}
    </ol>
  );
}
export default List