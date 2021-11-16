import React from 'react';

const mylist= [
 {
    id: 1,
    action: "Shopping",
 },
 {
    id: 2,
    action: "Cooking",
 },
 {
    id: 3,
    action: "Studying",
 },
 {
    id: 4,
    action: "Reading",
 },
 {
    id: 5,
    action: "Working",
 },

];
function TodoList() {
    return(
        <ul>
            {mylist.map(function(item) {
               return (
                <li key={item.id}>
                  <span>{item.action}</span>
                </li>
                );
            })},                 
        </ul>
    );

}

export default TodoList;