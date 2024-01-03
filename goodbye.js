//  Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
( function (){

    // declares an object named ==> byeSpeaker
    var byeSpeaker = {};

    // added the speakerWord variable to the function
    var speakerWord = 'Good Bye';

    // assign a property to the byeSpeaker object ==> speak , and make it equil to a function
    byeSpeaker.speak = function (name){
        console.log(speakerWord + ' ' + name);
    };

    // Expose the 'byeSpeaker' object to the global scope
    window.byeSpeaker = byeSpeaker;
})();