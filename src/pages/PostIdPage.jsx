import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { Loader } from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'

export const PostIdPage = () => {
  const params = useParams()
  const[post, setPosts] = useState('')
  const[comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async() => {
    const responce = await PostService.getById(params.id)
    setPosts(responce.data)
  })
  const [fetchComments, isComLoading, comError] = useFetching(async() => {
    const responce = await PostService.getCommentsByIdPost(params.id)
    setComments(responce.data)
  })
  useEffect (() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  },[])
  return (
    <div>
        {isLoading 
          ? <Loader/>
          : <div>
              <h1>{post.id}.{post.title}</h1>
              <div>{post.body}</div>
          </div>
        }
        <h1>
          Комментарии
        </h1>
        {isComLoading 
          ? <Loader/>
          : <div>
              {comments.map(comm => 
                <div key={comm.id} style={{marginTop: 5,}}>
                  <h3>{comm.email}</h3>
                  <div>{comm.body}</div>      
                </div>          
              )}
          </div>
        }
    </div>
  )
}
