

// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://storage.googleapis.com/tm-model/84-bWDV7-/';
let img_primary_button; 
let img_danger_button; 
let img_warning_button; 
let img_header; 
let img_date_picker; 
let img_modal; 


// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}


function setup() {
  createCanvas(640, 520);
  img_primary_button = loadImage('https://raw.githubusercontent.com/arajandekar/AI_Studio_Resources/master/Object%20Detection/Primary_Button.png'); // Load the image
  
  img_danger_button = loadImage('https://raw.githubusercontent.com/arajandekar/AI_Studio_Resources/master/Object%20Detection/Danger_Button.png'); // Load the image
  
  img_warning_button = loadImage('https://raw.githubusercontent.com/arajandekar/AI_Studio_Resources/master/Object%20Detection/Warning_Button.png'); // Load the image
  
  
 img_header = loadImage('https://raw.githubusercontent.com/arajandekar/AI_Studio_Resources/master/Object%20Detection/Header.png'); // Load the image 
  
  img_modal = loadImage('https://raw.githubusercontent.com/arajandekar/AI_Studio_Resources/master/Object%20Detection/Modal.png'); // Load the image 
  
  img_date_picker = loadImage('https://raw.githubusercontent.com/arajandekar/AI_Studio_Resources/master/Object%20Detection/Date_Picker.png'); // Load the image 
  
  // Create the video
  video = createCapture(VIDEO);
  video.hide();
  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);

  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);
  
  
  

  // Pick an emoji, the "default" is train
  let emoji = "🚂";
  if (label == "Primary Button") {
  image(img_primary_button, 0, height / 2, img_primary_button.width / 2, img_primary_button.height / 2);
    
  } else if (label == "Danger Button") {
    image(img_danger_button, 0, height / 2, img_danger_button.width / 2, img_danger_button.height / 2);
   
  } else if (label == "Warning Button") {
    image(img_warning_button, 0, height / 2, img_warning_button.width / 2, img_warning_button.height / 2);
  
  }else if (label == "Header") {
    image(img_header, 0, height / 2, img_header.width / 2, img_header.height / 2);
  
  } else if (label == "Modal") {
    image(img_modal, 0, height / 2, img_modal.width / 2, img_modal.height / 2);
  
  } else if (label == "Date Picker") {
    image(img_date_picker, 0, height / 2, img_date_picker.width / 2, img_date_picker.height / 2);
  
  }
  

  // Draw the emoji
  //textSize(256);
  //text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}
