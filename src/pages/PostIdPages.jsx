import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPages = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostByID, isLoading, error] = useFetching( async(id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching( async(id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect (() => {
        fetchPostByID(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1>You've opened a post page with ID - {params.id} </h1>
            {isLoading
                ?<Loader/>
                : <div>{post.id}, {post.title}</div>
            }
            <h1>Comments:</h1>
            {isComLoading
                ?<Loader/>
                : <div>
                    {comments.map(comm =>
                        <div style={{marginTop: 15}} key={comm.id}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }

        </div>
    );
};

export default PostIdPages;