import { useState } from "react"
import React from "react";

function submissionHandler({ user, input, time }) {
    const userComment = {
        name: user,
        comment: input,
        likeCount: 0,
        dislikeCount: 0,
        time: time,
    }

    console.log("Received the following data: " + JSON.stringify(userComment));

    let comments = localStorage.getItem('comments');
    let updatedComments = comments + ',' + JSON.stringify(userComment);

    localStorage.setItem('comments', updatedComments);

    console.log("Appending: '" + JSON.stringify(userComment) + "' to the array contined at key: 'comments' in localStorage");

    return;
}

export default function Post() {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");


    return (
        <div className="post">
            <h1>
                Comments
            </h1>
            <h3>
                What are your thoughts about Sprinklr?
            </h3>

            <form onSubmit={e => e.preventDefault()}>

                <input
                    type="text"
                    placeholder="Name..."
                    id="name"
                    value={name}
                    onChange={(e) => {
                        return setName(e.target.value);
                    }}>
                </input>

                <br></br>
                <br></br>

                <input
                    type="text"
                    placeholder="Comment..."
                    id="comment"
                    value={comment}
                    onChange={(e) => {
                        return setComment(e.target.value);
                    }}>
                </input>

                <br></br>
                <br></br>

                <input type="submit" onClick={() => {
                    submissionHandler({ user: name, input: comment, time: Date.now() });
                    setComment("");
                    setName("");
                }} />

            </form>
            <hr />
        </div>
    )
}