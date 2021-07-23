import React, { useContext, useState } from 'react'
import Comment from '../Comments/Comment'
import {UserContext} from '../../context/UserProvider'
import CommentForm from '../Comments/CommentForm'

const Issue = (props) => {
  const [setsComments, setComment] = useState(false)
  const [showComments, setShowComments] = useState(false)
  
  const {
    user: 
    { username }, 
    getIssueComments, 
    issueComments, 
    getUsername, 
    addUpvote, 
    addDownvote, 
    getIssuesByUser
  } = useContext(UserContext)
  
  const { 
    title, 
    details, 
    imgUrl, 
    _id 
  } = props
  
  
  const toggleComment =  () => {
    setComment(prevState => !prevState)
  }

  const allComments = () => {
    setShowComments(prevState => !prevState)
    if(!showComments){
    getIssueComments(_id)
    }
  }

  const addAnUpvote = (event) => {
    addUpvote(event)
    getIssuesByUser()
    event.preventDefault()
    
  }

  const addADownvote = (event) => {
    addDownvote(event)
    getIssuesByUser()
    event.preventDefault()
  }

  return (
    <div id={_id} key={_id} className = 'issue'>

      <h3>{title}</h3>
      <img src={imgUrl} width="285" height="325" alt="issueIMG"/>
      <p><em>Issue:</em> {details}</p>
      <span><em>Posted By: @{username}</em></span>
      <br />
      <span><em>Upvotes:</em> {props.upvotes}</span>
      <br/>
      <span><em>Downvotes:</em> {props.downvotes}</span>
      <br/><br/>

      {showComments ?
      issueComments.map(comment => 
        <Comment {...comment} 
          key={comment._id} 
          getUsername = {getUsername}
        />) 
      : 
      <button onClick={allComments}>View Comments</button>}
      {showComments 
      ? 
      <button onClick={allComments}>Hide Comments</button> : ""}
      {setsComments ? 
        <CommentForm 
          toggleComment = {toggleComment}
        /> 
      : 
      <button onClick={toggleComment}>Post a Comment</button>}
      {!showComments 
      ? 
      <button onClick={addAnUpvote}>Upvote</button> : "" }
      {!showComments ? 
      <button onClick={addADownvote}>Downvote</button> : ""}
      <br/>
    </div>
 
  )
}

export default Issue;