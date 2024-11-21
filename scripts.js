"use strict";

var inputs = document.querySelectorAll("input");
var submitButton = document.querySelector("button");

submitButton.addEventListener("click", () => {
    var invalidText = document.querySelectorAll(".invalid-text");
    invalidText.forEach((text) => {
        text.parentElement.removeChild(text);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    inputs.forEach((input) => {
        input.addEventListener("invalid", (event) => {
            event.preventDefault();

            if(event.target.attributes.required)
            {
                if (event.target.value == "") 
                {
                    console.log(event.target.innerHTML);
                    let requireText = document.createElement("p");
                    requireText.innerHTML = "❌ This field is required";
                    requireText.classList.add("invalid-text");
                    input.parentElement.append(requireText);
                }
            }

            if(event.target.attributes.minlength)
            {
                if (event.target.innerHTML.length < 8)
                {
                    let minLengthText = document.createElement("p");
                    minLengthText.innerHTML = "❌ Password must be greater than or equal to 8 characters";
                    minLengthText.classList.add("invalid-text");
                    input.parentElement.append(minLengthText);
                }
            }
        });
    });
});

