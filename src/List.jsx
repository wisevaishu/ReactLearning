function List({items = [], category = "Category"}){
//  const fruits = ["apple", "orange", "banana", "pineapple"];

// fruits.sort((a,b) => a.name.localeCompare(b.name));
//fruits.sort((a,b) => b.name.localeCompare(a.name));
//fruits.sort((a,b) => a.calories-b.calories);
//fruits.sort((a,b) => b.calories-a.calories);

//const lowCalFruits = fruits.filter(fruit => fruit.calories<2);
//const lowCalFruits = fruits.filter(fruit => fruit.calories>3);

//const category = category;
const itemlist = items;

const listItems = itemlist.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)
 return (
    <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">
        {listItems}
    </ol>
    </>
  );
}
export default List

