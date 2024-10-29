import React from "react";

function Create(){
    return(
        <div>
            <form method="post" action="/create-post" enctype="multipart/form-data">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" placeholder="Enter the title of your" />
                <label htmlFor="content">Write:</label>
                <textarea type="textarea" name="content" placeholder="write here..." />
                <label htmlFor="blogimg">Upload the Banner here:</label>
                <input type="file" name="blogimg"/>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default Create;