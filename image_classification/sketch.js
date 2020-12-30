let mobileNet;
let video;
let label = '';
let probability = '';

// Function will execute when Image classifier is ready
function onLoaded() {
    console.log("Model is ready");
    // mobileNet.classify(cat, gotResult);
    mobileNet.classify(gotResult);
    
}

// To display the error or result
function gotResult(err, result) {
    if(err)
        console.error(err);
    else {
        label = (result[0].label).toUpperCase()
        probability =  (result[0].confidence) * 100;
        mobileNet.classify(gotResult)

    }
}

// Will execute when the image is ready
function imageReady() {
    
    // image(cat,0,0,height, width)
}

function setup() {
    createCanvas(640, 500);
    
    // cat = createImg('images/cat.jpeg', imageReady)
    // cat.hide()
    // dog = createImg('images/dog.jpg')
    // dog.hide()

    video = createCapture(VIDEO);
    video.hide();
    background(0);


    mobileNet = ml5.imageClassifier('MobileNet', video, onLoaded)
    
}

function draw () {
    image(video, 0, 0)
    fill(0);
    textSize(32);
    text(label, 10, height - 100 );
    text(probability, 10, height - 30);
}