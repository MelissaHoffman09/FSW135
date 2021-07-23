import React from 'react'

const Comment = (props) => {  
  const { 
    _id, 
    username, 
  } = props
  


  return (
    <div key={_id} id={_id} className='comment'>
      <br/>
      <span><strong>
        Comment: {props.comment}
      </strong></span> 
      <br/>
      <span><em>
        @{username}
      </em></span>   
      <br/>
    </div>
  )
}

export default Comment;