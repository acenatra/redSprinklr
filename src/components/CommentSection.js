import React, { useState, useEffect } from 'react';

export default function CommentSection({submitClicked}) {
  
  const [comments, setComments] = useState([]);

  useEffect(() => {

    const storedComments = localStorage.getItem('comments');

    if (storedComments) {
      const parsedComments = JSON.parse(storedComments);
      setComments(parsedComments);
    } 
  },[submitClicked]);

  return (
    <div>
      {comments.length === 0 ? (
        <p>No comments for this post</p>
      ) : (
        <ul>
          {comments.length}
          {comments.map((comment, index) => (
            <div className='comment-card'>
                <h2>{comment.name}</h2>
                <p>{comment.comment}</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}


