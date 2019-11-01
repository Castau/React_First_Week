## React_First_Week

### Monday Assignment
* Link to assignment: 
  * [ES6 and React functional Components and props](https://docs.google.com/document/d/17iG0I2cpgdfmOIW9J-L8kNaO47DILFIzEc9Yi8yW6-o/edit#heading=h.dl1lz6dyu26o)	
* The **Monday** assignments include these files:  
  * __ES6 and React functional Components and props Exercises__
    * [App](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App.js)
    * [App2](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App2.js)
    * [App3](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App3.js)
    * [file1](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/file1.js)
    * [file2](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/file2.js)  
      
        
### Tuesday Assignment
* Link to assignments: 
  * [State and Events with React](https://docs.google.com/document/d/1rE6hdpT_NPC_Hbxlo0nRYJwde_fQDGOiSjauKGYWcdU/edit#heading=h.3z15ouauaojt)	
  * [List and Keys](https://docs.google.com/document/d/1VlfZly4e6ZnCWJrv1LYhSDQMnBZn3NsyH7VQNLxCOME/edit#heading=h.hnvt8uwl2yk7)	
* The **Tuesday** assignments include these files:  
  * __State and Events with React Exercises__
    * [App4](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App4.js)
    * [App5](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App5.js)
    * [App6](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App6.js)
  * __List and Keys Exercises__
    * [ListDemoApp](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/ListDemoApp.js)
    * [ListDemoApp2](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/ListDemoApp2.js)    
  
    
### Wednesday Assignment
* Link to assignments: 
  * [Forms and Controlled Components](https://docs.google.com/document/d/1rEaU8ObqoxHF3vt_fIsTfEb3yLRnVF8fCWobJJ9c2wo/edit#heading=h.hnvt8uwl2yk7)	
  * [Lifting State Up](https://docs.google.com/document/d/1NTzbbMP2gWJoE2lDhD8tqGYNzQB1qSRqxb4PAtajWpI/edit#heading=h.qe8anagqaw9l)	
* The **Wednesday** assignments include these files:  
  * __Forms and Controlled Components Exercises__
    * [FormDemo.js](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/FormDemo.js)
    * [FormDemoMultiple.js](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/FormDemoMultiple.js)
  * __Lifting State Up Exercises__
    * 1 [App11](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App11.js)
    * 1 [NewTodo](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/NewTodo.js)
    * 1 [ToDoList](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/TodoList.js)
    * 2 [App12](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App12.js)
    * 2 [NewPerson](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/NewPerson.js)
    * 2 [AllPersonsList](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/AllPersonsList.js)
   
### Thursday Assignment
* Link to assignments: 
  * [API Interaction using fetch](https://docs.google.com/document/d/1R7o42j_CJesnrCcNNRmIARK14ocDvMqodWDzzw6lDzg/edit#)	
* The **Thursday** assignments include these files:  
  * __API Interaction using fetch__
    * [Separate project for this assignment](https://github.com/Castau/React_First_Week/tree/master/react-crud-rest-exercise-master)

  

## Questions
### Monday Questions
### 3 Composing Components, Props-1
#### d) 
>Make sure you understand why the parenthesis is needed after the return statement in the App component, and not in the Welcome Component.

Since the return statement in the App function has more than one line of code a parenthesis is needed. This is because JavaScript will automatically insert a semicolon at the end of the line which the return statement is on, if possible. The parenthesis make this impossible.    
  
### 3 Composing Components, Props-2
#### d)
To solve this I used the native shape() function, but I'm unsure if this is the correct way of assigning type checks on an object:
```javascript
WelcomePerson.propTypes = {
  person: PropTypes.shape({
   firstName: PropTypes.string.isRequired,
   lastName: PropTypes.string.isRequired,
   email: PropTypes.string.isRequired
  })
};
```
I found the answer I'm using on [Stackoverflow](https://stackoverflow.com/questions/26923042/how-do-you-validate-the-proptypes-of-a-nested-object-in-reactjs?fbclid=IwAR3HoicJ-XIXdmpQqqIfqfYqwO9GYwhHJ4ULUGzsVNnwn_odf185snZ9nBo).
  
#### e) 
To fix the error caused by [this](https://reactjs.org/docs/lists-and-keys.html#keys):
>*Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.*

The key property has to be included in the map, like this (array-index is used as key since we haven't been taught this properly yet): 
```javascript
{names.map((pers, index) => (<WelcomePerson person={pers} key={index} />))}
```

![alt text](https://i.imgur.com/I3e5l0Y.png)


### Tuesday Questions
### List and Keys

#### What is the purpose of the key value, which must be given to individual rows in a react-list
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. I.e. for React to identify changes in the Virtual DOM compared to the Real DOM, the keys are needed. If no keys are given, React assigns indexes as keys, as I have understood it.   

#### It's recommended to use a unique value from your data if available (like an ID). How do you get a unique value in a map callback, for data without a unique id?
One way of assigning unique keys is to use the index, like this:      
 ```javascript 
 {names.map((pers, index) => (<WelcomePerson person={pers} key={index} />))}
 ```  
However this is supposedly not the most optimal way of assigning unique keys, as this method is prone to errors (if the values are shifted fx). According to this [Stackoverflow answer's edit](https://stackoverflow.com/a/39549510) there's several other ways of assigning unique keys, like using `Date().getTime()` or using a npm package like uuid, which I think we'll learn about soon.  

#### What is the difference(s) between state and props?
[State:](https://www.w3schools.com/react/react_state.asp) React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders. [Props](https://www.w3schools.com/react/react_props.asp) are arguments passed into React components. Props are passed to components via HTML attributes. Props are like function arguments in JavaScript and attributes in HTML. To send props into a component, use the same syntax as HTML attributes. Props are immutable.  

#### For which scenarios would you use props, and for which would you use state?
State is used to re-render a component. So for something to change dynamically, the State object needs to change. Props are used to pass data from one component to another.  

#### Where is the only place you can set state directly as in:  this.state = {name: "Peter"};
As far as I understand the only place state can be set directly like above is in a Class components constructor. Since we use functional React (Hooks), we don't use Class componentes, so for us to set state directly, we do it like this in the Function Components: 
```javascript
const [state, setState] = useState(initial state);
``` 
fx 
```javascript 
const [count, setCount] = useState(17);
``` 
to set the initial state.  

#### How must you set state all other places?
 ```javascript 
 setState(new value for state);
 ``` 
 fx 
 ```javascript 
 setCount(count + 1)
 ```
      
### Wednesday Questions
### Forms and Controlled Components Questions

#### In a Controlled Component React state is made the "Single source of truth", so how (1) Do we ensure that input controls like text, textarea or select always presents the value found in the components state? (2) Do we ensure that a controls state, always matches the value found in an input control?  
  
(1) The value attribute in the input-tag is set to the object variable, like this  
 ```javascript
 <input value={object.variable} /> 
 ```  
        
(2) The onChange eventHandler on the form-element calls this when the input changes:  
```javascript
<form onChange={handleChange}><input name="inputname" value={object.variable}/></form> 
``` 

```javascript 
const handleChange = (event) => {  
  const target = event.target;  
  const value = target.value;  
  const name = target.name;  
  setObject({ ...object, [name]: value }); 
}; 
```
      
####  What is the purpose of doing event.preventDefault() in an event handler?
[The preventDefault()](https://www.w3schools.com/jsref/event_preventdefault.asp) method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. So in this case it dosen't submit the form and reloads the webpage.  

####  What would be the effect of NOT doing event.preventDefault in a submit handler
The opposite of above - the default event would not be canceled, the form would submit and the webpage would be reloaded.  

#### Why don't we want to submit the traditional way, in a single page application?
[A single-page application](https://en.wikipedia.org/wiki/Single-page_application) is a web application or web site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. If the form was submitted the traditional way, the webpage would be reloaded.  

#### Explain in words what it takes to implement the "Controlled Component" pattern for a form
The component that renders the form, controls what happens in the form on subsequent input. Since the value attribute set on the form element is `value={object.variable}` the React state will be in control. The state is handled by the UseState only, which is set in the `handleChange()`.  
  
  
  
### Lifting State Up 
#### What is meant by the react term “Lifting State Up”?

To share a state between two components, the most common operation is to move it up to their closest common ancestor. This is called “lifting state up”. This way when an input is updated another component should reflect the new shared state. The descendant component is controlled by the ancestor.

#### Where do you lift it up to?
The state is lifted to the closest common ancestor to the components that need the state. 

#### Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?
From top to bottom. 

#### Lifting state up, involves a great deal of boilerplate code, what’s the benefit we get from doing “things” like this?
The code is easier to test and debug
