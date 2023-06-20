import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='question-wrap'>
            <h3 className='question'>1. when should you used Context API?</h3>
            <p className='answer'>Answer: </p>
            <p>The Context API in React is used when you have data or state that needs to be accessed by multiple components throughout your application. It provides a way to share data between components without the need for prop drilling.</p><br />

            <h3 className='question'>2. What is custom hook?</h3>
            <p className='answer'>Answer:</p>
            <p>A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. <br />Custom hooks can manage their own state using the useState hook.Custom hooks can handle side effects using the useEffect hook, allowing you to encapsulate and reuse code related to data fetching, or other side effects.</p><br />
            <h3 className='question'>3. What is useRaf and what does it work?</h3>
            <p className='answer'>Answer:</p>
            <p>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly. we can use the useRef Hook. <br /> <strong>useRef()</strong> only returns one item. It returns an Object called current. When we initialize useRef we set the initial value: <strong>useRef(0)</strong>.</p><br />
        </div>
    );
};

export default Blog;