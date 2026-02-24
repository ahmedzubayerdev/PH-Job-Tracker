## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Those functions are use to select elements form html document.
The main difference between these functions are the amount of elements can be selected. 
With getElementById and querySelector we can only select one element and 
with getElementsByClassName we can select multiple element under one class name . 
With querySelectorAll we can select multiple elements using className or html element name.

## 2.How do you create and insert a new element into the DOM?

Create an element => document.createElement("tagName")
Inserting an element => 1. .appendChild(tagName)
                        2. .append(tagName)

## 3. What is Event Bubbling? And how does it work?

Event Bubbling is a behavior  in js where an event starts from the element that triggered it and then bubbles up to its parent, then its parents and so on until it reaches to the document object

##  4.What is Event Delegation in JavaScript? Why is it useful?

Event Delegatioin is a technique in js where we attach the event handler in parents element instade of child elment to handle events for its child elements.

usefulness:-
1. cleaner code 
2. Better performence
3. Improve readibility 

## 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() => its stops default browser behavior of an element  but it doesn't stop event bubbling.

stopPropagation() => stops the event from bubbling further in  the DOM but it doesn't stop default browser behavior  

