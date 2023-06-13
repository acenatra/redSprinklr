import { useState } from "react"
import React from "react";


export default function Post({submissionHandler}) {
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

                <button type="submit" onClick={() => {
                    submissionHandler({ user: name, input: comment, time: Date.now() });
                    setComment("");
                    setName("");
                }}>Comment </button>

            </form>
            <hr />
        </div>
    )
}