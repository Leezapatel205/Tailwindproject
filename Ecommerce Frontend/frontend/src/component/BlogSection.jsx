
import BlogCard from "./blogcard";
import post1 from "../assets/post__1.png";
import post2 from "../assets/post__2.png";
import post3 from "../assets/post__3.png";


const data=[
    {
        img :post1,
        title :"Healthy Food Healthy Life",
        date:"Aug 27,2023",
        Comment: 8
    },
    {
        img :post2,
        title :"Healthy Food Healthy Life",
        date:"Aug 25,2023",
        Comment: 1
    },
    {
        img :post3,
        title :"Healthy Food Healthy Life",
        date:"Aug 24,2023",
        Comment: 6
    },
];


const BlogSection = () => {
  return (
    <div className="container pt-16">
        <h2 className="font-bold text-2xl">Latest News</h2>
<p className="text-gray-500">
    Present posts In a best wayto highlight interesting moments of your
    </p>      
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {        
            data.map((e)=>(<BlogCard  key={e.date} img={e.img} title={e.title} date={e.date} Comment={e.Comment}/>))
        }
    </div>
    </div>
  )
}

export default BlogSection
