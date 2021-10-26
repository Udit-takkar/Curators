import React from 'react';
import { useParams } from 'react-router-dom';

export default function SeePost() {
    const post = JSON.parse(localStorage.getItem('ablogs'));
    console.log("Slug: ",post)
    return (
        <div>
            <div className=" container2 shadow-lg">
                <div><h4 style={{marginLeft:"10px"}}>{post.title}</h4></div>
                <p style={{ marginLeft:"0px", fontSize:"10px"}}>{post.author}</p>
            </div>
        </div>
    )
}
