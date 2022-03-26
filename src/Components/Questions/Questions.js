import React from 'react';
import './Questions.css';
import Accordion from 'react-bootstrap/Accordion';


const Questions = () => {
    return (
        <Accordion style = {{width: "50%"}} className = 'container mx-auto mb-5' defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>How Does React Work?</Accordion.Header>
    <Accordion.Body>
        When we write component, it has pure js code. I have to convert js code to html code. and here react actually works. and I have to inject it to index.html throw react DOM. and the whole process run without refreshing the page. that's why react is single page application. React works in declarative code. React goes through its virtual DOM,creates a list of those changes that need to be made to the actual DOM. In fancy words, React does batch updates. react is a javascript library.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Difference between state and props</Accordion.Header>
    <Accordion.Body>
        <h3>State</h3>
    1. State cannot be accessed by child components. <br />
    2. State changes can be asynchronous. <br />
    3. State is mutable. <br />
    4. State cannot make components reusable.

<br /><br />

        <h3>Props</h3>
    1. Props can be accessed by the child component. <br />
    2. Props are read-only. <br />
    3. Props are immutable. <br />
    4. Props make components reusable. <br />
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>How Does useState work?</Accordion.Header>
    <Accordion.Body>
    useState() is a Hook that allows to have state variables in functional components. When You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. You create a functional component and throw some React hook at it that tracks state, can also update it, and it just works. React remember the value of useState and when application re-render then it don't initialize the thing two times and skip.  
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    );
};

export default Questions;