let mobileNet;

function setup() {
    createCanvas(640, 480);
    background(0);
    
    cat = createImg('images/cat.jpeg')
    
    cat.hide()

    dog = createImg('images/dog.jpg')
    
    dog.hide()

    mobileNet = ml5.imageClassifier('MobileNet', onLoaded)
    
    
    // mobileNet.classify(cat, (err, result)=> {
    //     if (result) {
            
    //         console.log(result);
    //     } else {
    //         console.log("Something went wrong");
    //         console.error(err);
    //     }
    // })

    // mobileNet.classify(dog, (err, result)=> {
    //     if (result) {
            
    //         console.log(result);
    //     } else {
    //         console.log("Something went wrong");
    //         console.error(err);
    //     }
    // })


}