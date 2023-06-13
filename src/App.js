import React, {useState} from 'react';
import Post from './components/Post.js'
import CommentSection from './components/CommentSection.js';

function App() {

  const [submitClicked, setSubmitClicked] = useState(false);

  function submissionHandler({ user, input, time }) {

    const userComment = [{
      name: user,
      comment: input,
      likeCount: 0,
      dislikeCount: 0,
      time: time,
    }];

    const storedComments = localStorage.getItem('comments');


    const comments = storedComments ? JSON.parse(storedComments) : [];


    const updatedComments = [...comments, ...userComment];

  
    localStorage.setItem('comments', JSON.stringify(updatedComments));

    setSubmitClicked(prev=>!prev);

  }

  return (
    <>
      <Post submissionHandler={submissionHandler} />
      <CommentSection submitClicked={submitClicked}  />
    </>
  );
}

export default App;
