
    "use strict";
    var btn, add, homework;
    //   Access new-item button. 
     btn = document.querySelector(".new");
    //   Access unordered list.
     add = document.querySelector(".list ul");
    //   Declare variable list-item.
    
    //   Define function removeItem (use event object to find out which item is clicked).
    function removeItem(event) {
        //   Remove clicked item from unordered list. 
        add.removeChild(event.target);
        //   End function removeItem. 
    }

    //
    //   Define function addItem.
    function addItem () {
        //      Create list item and store output in a variable.
        homework = document.createElement("li");
        //      Use innerHTML on created list item and assign it with user input.    
        //      from prompt("Enter a new item for to-do list:").
        homework.innerHTML = prompt("Add your new homework in to do list, and make sure you will finish it.");
        //      If list item has a content:   
        if (homework.innerHTML !== "") {
            //   Append list item to unordered list.
            add.appendChild(homework);
            //   Add event listener to the added list-item to listen for click event - event     
            add.addEventListener("click", removeItem);
            //   handler will be removeItem function.  
            //   End if. 
        }
    }

    btn.addEventListener("click", addItem);
    //   Add event listener to button to listen for click event - event handler will be addItem function.
    //
    //Close and immediately invoke closure
