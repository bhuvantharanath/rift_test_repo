// src/user-profile.js

function getUserInitials(user) {
    // TYPE_ERROR: Attempting to call .toUpperCase() on a potentially undefined property 
    // or attempting to slice a Number if user.age is passed instead of a string name.
    const age = 25;
    return age.toUpperCase(); // Crash: age.toUpperCase is not a function
}

module.exports = { getUserInitials };
