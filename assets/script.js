var topic = "CSSS";

/*
if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
} */




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

for (var i = 0; i < topics.length; i++) {
    console.log(topics[i])
}