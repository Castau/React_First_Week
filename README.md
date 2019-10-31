## React_First_Week

### Monday Assignment
* Link to assignment: 
  * [ES6 and React functional Components and props](https://docs.google.com/document/d/17iG0I2cpgdfmOIW9J-L8kNaO47DILFIzEc9Yi8yW6-o/edit#heading=h.dl1lz6dyu26o)	
* The **Monday** assignments include these files:  
  * [App](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App.js)
  * [App2](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App2.js)
  * [App3](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App3.js)
  * [file1](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/file1.js)
  * [file2](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/file2.js)
    

### Comments to the individual assignments
#### 3 Composing Components, Props-1
#### d) 
>Make sure you understand why the parenthesis is needed after the return statement in the App component, and not in the Welcome Component.

Since the return statement in the App function has more than one line of code a parenthesis is needed. This is because JavaScript will automatically insert a semicolon at the end of the line which the return statement is on, if possible. The parenthesis make this impossible.  
  
  
#### 3 Composing Components, Props-2
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


### Tuesday Assignment
* Link to assignments: 
  * [State and Events with React](https://docs.google.com/document/d/1rE6hdpT_NPC_Hbxlo0nRYJwde_fQDGOiSjauKGYWcdU/edit#heading=h.3z15ouauaojt)	
  * [List and Keys](https://docs.google.com/document/d/1VlfZly4e6ZnCWJrv1LYhSDQMnBZn3NsyH7VQNLxCOME/edit#heading=h.hnvt8uwl2yk7)	
* The **Tuesday** assignments include these files:  
  * State and Events with React Exercises
    * [App4](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App4.js)
    * [App5](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App5.js)
    * [App6](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/App6.js)
  * List and Keys Exercises
    * [ListDemoApp](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/ListDemoApp.js)
    * [ListDemoApp2](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/ListDemoApp2.js)
  
  * __List and Keys Questions__
    * _What is the purpose of the key value, which must be given to individual rows in a react-list_
      * Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. I.e. for React to identify changes in the Virtual DOM compared to the Real DOM, the keys are needed. If no keys are given, React assigns indexes as keys, as I have understood it. 
    * _It's recommended to use a unique value from your data if available (like an ID). How do you get a unique value in a map callback, for data without a unique id?_
      * One way of assigning unique keys is to use the index, like this:      
      ```{names.map((pers, index) => (<WelcomePerson person={pers} key={index} />))}```  
      However this is supposedly not the most optimal way of assigning unique keys, as this method is prone to errors (if the values are shifted fx). According to this [Stackoverflow answer's edit](https://stackoverflow.com/a/39549510) there's several other ways of assigning unique keys, like using `Date().getTime()` or using a npm package like uuid, which I think we'll learn about soon. 
    * _What is the difference(s) between state and props?_
      * [State:](https://www.w3schools.com/react/react_state.asp) React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.
      * [Props](https://www.w3schools.com/react/react_props.asp) are arguments passed into React components. Props are passed to components via HTML attributes. Props are like function arguments in JavaScript and attributes in HTML. To send props into a component, use the same syntax as HTML attributes. Props are immutable. 
    * _For which scenarios would you use props, and for which would you use state?_
      * State is used to re-render a component. So for something to change dynamically, the State object needs to change.
      * Props are used to pass data from one component to another. 
    * _Where is the only place you can set state directly as in:  this.state = {name: "Peter"};_
      * As far as I understand the only place state can be set directly like above is in a Class components constructor. Since we use functional React (Hooks), we don't use Class componentes, so for us to set state directly, we do it like this in the Function Components: `const [state, setState] = useState(initial state);` fx `const [count, setCount] = useState(17);` to set the initial state. 
    * _How must you set state all other places?_
      * `setState(new value for state);` fx `setCount(count + 1)`
      

### Wednesday Assignment
* Link to assignments: 
  * [Forms and Controlled Components](https://docs.google.com/document/d/1rEaU8ObqoxHF3vt_fIsTfEb3yLRnVF8fCWobJJ9c2wo/edit#heading=h.hnvt8uwl2yk7)	
  * [Lifting State Up](https://docs.google.com/document/d/1NTzbbMP2gWJoE2lDhD8tqGYNzQB1qSRqxb4PAtajWpI/edit#heading=h.qe8anagqaw9l)	
* The **Wednesday** assignments include these files:  
  * Forms and Controlled Components Exercises
    * [FormDemo.js](https://github.com/Castau/React_First_Week/blob/master/react_exercises/src/FormDemo.js)
  * Lifting State Up Exercises
    * [todo]()
