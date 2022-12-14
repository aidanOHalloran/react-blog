import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    return (
        <div className="create">
            <h2>Create Blog Post</h2>
            <form>
                <label>Blog Title:</label>
               <input type="text" required value={ title } onChange={(e) => setTitle(e.target.value)}/>
               <label>Blog Body:</label>
               <textarea required value={ body } onChange={(e) => setBody(e.target.value)}></textarea>
                    <label >Blog Author:</label>
                    <select value={ author }onChange={(e) => setAuthor(e.target.value)}>
                        <option value="mario">Mario</option>
                        <option value="yoshi">Yoshi</option>
                        <option value="luigi">Luigi</option>
                        </select>
                    <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;