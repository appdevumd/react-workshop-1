import {React} from 'react'
import './ProductList.css'

/* This is Javascript Object Notation (JSON) We will go over JSON next week */
const productData_1 = [
    { name: 'Product 1', description: 'This is product 1', rating: 4.5 },
    { name: 'Product 2', description: 'This is product 2', rating: 4.0 },
    { name: 'Product 3', description: 'This is product 3', rating: 5.0 }
]

/* Another example of JSON, you can switch to this data to see how visually changes */
const productData_2 = [
    { name: 'Product 1', description: 'This is product 1', rating: 4.5 },
    { name: 'Product 2', description: 'This is product 2', rating: 4.0 },
    { name: 'Product 3', description: 'This is product 3', rating: 5.0 },
    { name: 'Product 4', description: 'This is product 4', rating: 3.0 },
    { name: 'Product 5', description: 'This is product 5', rating: 1.0 },
    { name: 'Product 6', description: 'This is product 6', rating: 2.5 }
]
/* This is the ProductCard Component 
   Important thing to note is the props (parameters) and how they integrate 
   into the component so that it visually appears based on the data passed in */
function ProductCard({name, description, rating}){
    return (
        <div className='product-card'> 
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{rating}/5</p>
        </div>
    );
};

/* This is the ProductList Component 
   Important things to note 
   -We will use the map function when we have an unknown number of inputs 
   Product and index are based on the JSON where a product is each object 
   and index is to number each product uniquely. We will go over this next
   workshop.

   -The data from product is passed is passed into each ProductCard as a prop
*/
function ProductList(){
    return (
        <div className='product-list'>
            {productData_1.map((product, index) => (
                <ProductCard
                    key={index}
                    name={product.name}
                    description={product.description}
                    rating={product.rating}
                />
            ))
            }
        </div>
    );
};

/* Notice we only export ProductList. Think of ProductList as constructing
   the array of cards.
*/
export default ProductList;