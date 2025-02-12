import ProductCard from "./ProductCard"
import feature__1 from "../assets/feature__1.png"

import product1 from "../assets/product__1.png";
import product2 from "../assets/product__2.png";
import product3 from "../assets/product__3.png";
import product4 from "../assets/product__4.png";




const data=[
    {
        id :0,
        name :"Dried Mango",
        img: product1,
        price:"$500"
    },
    {
        id :1,
        name :"Crunchy Crisps",
        img:product2,
        price:"$300"
    },
    {
        id :2,
        name :"Jewel Cranberries",
        img:product3,
        price :"$200"
    },
    {
        id :3,
        name :"Almond Organic",
        img:product4,
        price :"$100"
    },
   
  
    
];



const FeatureSectionFruits = () => {
  return (
    <div className='container pt-16'>
        <div className='lg:flex justify-between items-center'>
            <div>
                <h3 className='font-medium text-2xl'> Friut & Vegetable </h3>
                <p className="text-gray-600 mt-2">
              Buy Farm Frash Friut and Vegetable online at the best prices.
            </p>
            </div>
          <div className="space-x-4 mt-8 lg:mt-0">
            <button className="feature_btn">Friut</button>
            <button className="text-gray-600 hover:text-accent">Vegetable</button>
            <button className="text-gray-600 hover:text-accent">Bread & Bakery</button>
          </div>





        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-8 gap-8">

        <div>
          <img className="w-full h-full object-cover" src={feature__1} alt="banner"/>
        </div>
        

        {
            data.map((e)=>(<ProductCard  key={e.id} img={e.img} name={e.name} price={e.price}/>))
        }
    </div>




    

    

    </div>
  );
};
 
export default FeatureSectionFruits
