import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: 'lorem ipsum...', author: 'Mario', id: 1},
        { title: 'Welcome Party!', body: 'lorem ipsum...', author: 'Luigi', id: 2},
        { title: 'Web Dev Tips', body: 'lorem ipsum...', author: 'Yoshi', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect has ran, meaning changes detected');
    });

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/> 
        </div>
     );
}
 
export default Home;