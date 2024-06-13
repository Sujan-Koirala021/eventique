import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';


function ShowResults() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts();
        }, []);
    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/posts');
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
                } else {
                    console.error('Failed to fetch posts:', response.statusText);
                    }
                    } catch (error) {
                        console.error('Failed to fetch posts:', error);
                        }
                        }
                        return (
                            <div>
            {posts.map(post => <BlogCard key={post._id} post={post} />)}
        </div>
    );
    }
export default ShowResults