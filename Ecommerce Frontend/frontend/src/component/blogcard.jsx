interface propsType {

    img: string;
    title: string;
    Comment: number;
    date: string;
     }
    
    
    const BlogCard: React.FC<propsType> = ({ img, title, date, Comment }) => {
    
    return <div className="space-y-4">
    
    <img className="rounded-1g hover:scale-105 transition-transform"
           src={img}
           alt="post" />
    
    <div className="text-accent font-medium">
    
    <span>{date} / </span>
    <span>{Comment} Comments</span>
    </div>
    <h3 className="font-bold text-xl"> {title}</h3>
    </div>;
    };
    

    
    export default BlogCard;