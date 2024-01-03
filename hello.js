//  Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
( function (){

    // declares an object named ==> helloSpeaker
    var helloSpeaker = {};

    // added the speakerWord variable to the function
    var speakerWord = 'Hello';

    // assign a property to the helloSpeaker object ==> speak , and make it equil to a function
    helloSpeaker.speak = function (name){
        console.log(speakerWord + ' ' + name);
    };

    // Expose the 'helloSpeaker' object to the global scope
    window.helloSpeaker = helloSpeaker;
})();