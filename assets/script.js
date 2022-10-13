var topic = "CSS";

function selectTopics() {

if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
} 
}




var shapes = ['round', 'square', 'triange']

function showShapes (array) {
    
    result = []
    for (i = 0; i < array.length; i++) {
        result.push(array[i])
    }
    return result;

}

var logShapes = showShapes(shapes);

var topics = ['HTML', 'CSS', 'Git', 'Javascript'];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];



function listTopics (array) {
    for(var i = 0; i < array.length; i++) {
        console.log(array[i])
    }


}

console.log('Here are the topics we learned through Prework:');
listTopics(topics);

console.log('Which topic should we study first?');
selectTopics();

