import MyButton from "./Ui/button/MyButton";
import {Link} from "react-router-dom";
import classes from "./Ui/button/MyButton.module.css";

const PostItem = (props) => {

    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <Link className={classes.myBtn} to={`${props.post.id}`}>Open</Link>
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;