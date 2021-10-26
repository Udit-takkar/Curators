import React from 'react';
import ReactMarkdown from "react-markdown";
import SeePost from './SeePost';
import { Link, useHistory } from "react-router-dom";


export default function PostOverview({title, body , author }) {

    function truncateString(str, num) {
        if (str.length <= num) {
          return str
        }
        return str.slice(0, num) + '...'
    }
    const history = useHistory();

    function clickViewPost(post) {
        console.log("Post: ",post);
        localStorage.setItem('ablogs',JSON.stringify(post));
        window.location.href = '/seePost';
    }

    const smallBody = truncateString(body, body.length/7)
    return (
        <div>

            <div 
                className="post-overview mt-4 " style={{marginLeft:'70px', width:"60vw", cursor:"pointer"}}
                onClick={() => clickViewPost({title:title,body:body, author:author})}
            >
                <div >
                    <b>{title}</b>
                </div> 
                <div >
                    <ReactMarkdown children={smallBody}/>
                    <br/> 
                    <p className="text-black-50">Read more</p>        
                </div> 
            </div>
            <hr style={{marginLeft:'70px', width:"60vw"}} />
           
        </div>
    )
}