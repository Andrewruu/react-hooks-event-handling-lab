import React from "react";

// Code Keypad Component Here
function handleChange(event) {
    console.log(`Entering password...`);
  }
function Keypad (){
    return (
        <div>
            <input
                type="password"
                name="search"
                onChange={handleChange}
                placeholder="Enter password..."
            />
        </div>
    )
}

export default Keypad;