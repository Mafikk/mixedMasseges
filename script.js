const greeting = ['Hello', 'Good day', 'Yo'];
const day = ['You seem to have a bad day, here\'s a joke', 'You seem to have a lack of motivation, here\'s a quote for you', ];
const inspiration = ['Whatever you do, always give 100%. Unless you\'re donating blood.', 'Copcakes are muffins that believed in miracles.', 'If at first you don\'t suceed, than skydiving definately isn\t for you.'];
const jokes = ['Two artists had an art contst. It ended in a draw.', 'How do you make a tissue dance? Put a little boogie in it.', 'I have a fear of speed bumps. But, I am slowly getting over it.'];


let returnRandomSentence = (array1, array2) => {
    let greet = array1[Math.floor(Math.random()*array1.length)];
    let dayIndex = Math.floor(Math.random()* array2.length); 
    console.log(`${greet}. ${array2[dayIndex]}`);

    if (dayIndex === 1) {
        console.log(inspiration[Math.floor(Math.random()*inspiration.length)]);
    } else if (dayIndex === 0) {
        console.log(jokes[Math.floor(Math.random()*jokes.length)])
    };
};

returnRandomSentence(greeting, day);