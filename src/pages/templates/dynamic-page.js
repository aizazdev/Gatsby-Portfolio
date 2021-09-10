import React from 'react';
import {Link} from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({pageContext})=> {
console.log("Page Context", pageContext.data.data.allContentfulBlogPosts.nodes.map((n)=>n.blogImage.title) );
const {data: {data: { allContentfulBlogPosts }}} = pageContext;
console.log("allContentfulBlogPosts", allContentfulBlogPosts);    
return(
        <>
            <div>
                <div>I have Created Page dynamically </div>
                <div><strong>Title</strong>: {pageContext.name}</div>
                <div><strong>Description</strong>: {pageContext.desc}</div>
                <div><strong>Created By</strong>: {pageContext.createdBy}</div>
            </div>
            <div>
                <h2>Contentful data</h2>
                {
                    allContentfulBlogPosts.nodes.map((n, ind)=> {
                        return(
                            <div key={ind}>
                                <h3>Image Title: {n.blogImage.title}</h3>
                                <pre>Created Date: {}</pre>
                                <img src={`${n.blogImage.file.url}`} height="300px" width="500px"/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}