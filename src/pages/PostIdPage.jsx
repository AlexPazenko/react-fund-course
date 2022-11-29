import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import Loader from "../componets/Ui/Loader/Loader";


const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id)=> {
        const response = await PostService.getById(id)
        setPost(response.data)
    })


    const [ferchComments, isComLoading, comError] = useFetching(async (id)=> {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        ferchComments(params.id)
    }, [])

    return (
        <>
            <h1>You have opened a post with the Id = {params.id}</h1>
            {error && <h1>An error occurred ${error}</h1>}
            {isLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
                :<h2>{post.id}. {post.title}</h2>
            }
            <h3>Comments:</h3>
            {comError && <h1>An error occurred ${comError}</h1>}
            {isComLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
                :<div style={{maxWidth: '800px'}}>{ comments.map((comment) => {
                  return(  <div key={comment.id} style={{marginTop: '15px'}}>
                        <h5>{comment.email}</h5>
                        <div>{comment.body}</div>
                    </div>
                  )
                    })
                }
                </div>
            }
        </>
    );
};

export default PostIdPage;