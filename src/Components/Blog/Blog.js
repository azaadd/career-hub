import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='question'>1. Difference between props and state.</h3>
                <p className='answer'>Answer: <strong>props</strong></p>
                <p>Props allows passing data from one component to other components. props is an object which stores the value of attributes of a tag and work similar to the HTML attributes.Props are immutable.</p><br />
                <p className='answer'>Answer: <strong>state</strong></p>
                <p>The state object is where you store property values that belong to the component.When the state object changes, the component re-renders. State is mutable.</p><br />

                <h3 className='question'>2. How to work useState?</h3>
                <p className='answer'>Answer:</p>
                <p>UseState is a React Hook that lets we add a state variable to our component. <br />const [state, setState] = useState(initialState);<br /> <br />We initialize our state by calling useState in our function component. <br /> <strong>useState accepts an initial state and returns two values:</strong>  <br /> <br /> i) state: The current state. <br />
                ii) setState: A function that updates the state.</p><br />
                <h3 className='question'>3. What does work useEffect without data load?</h3>
                <p className='answer'>Answer:</p>
                <p>The <strong>useEffect</strong> Hook allows to perform side effects in our components. <strong>Some examples</strong> of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p><br />
        </div>
    );
};

export default Blog;