import React, {useState} from 'react';
import MyInput from "./Ui/input/MyInput";
import MyButton from "./Ui/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        setPost({title: '', body: ''})
        create(newPost)
    }
    return (
        <form>
            <MyInput value={post.title} type="text" placeholder="Post's name" onChange={e => setPost({...post, title: e.target.value})} />
            <MyInput value={post.body} type="text" placeholder="Post's description" onChange={e => setPost({...post, body: e.target.value})}/>
            <MyButton onClick={addNewPost}>Add post</MyButton>
        </form>
    );
};

export default PostForm;