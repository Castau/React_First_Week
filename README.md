## React_First_Week

### Monday Assignment
* Link to assignment: [ES6 and React functional Components and props](https://docs.google.com/document/d/17iG0I2cpgdfmOIW9J-L8kNaO47DILFIzEc9Yi8yW6-o/edit#heading=h.dl1lz6dyu26o)	
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
