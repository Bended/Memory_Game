
var guess1 = "";
var guess2 = "";
var count = 0;
var images = [];
var setOfImages = [];
var img_class;

for (var i = 0; i < 12; i++) {
     setOfImages[i] = i+1 + '.jpg';
}

            new_attempt()
                //randomize an image into my SetOfImage Array
            for (var i = 0; i < 6; i++) {
                var rand = Math.floor((Math.random(setOfImages.length)));
                var img = setOfImages[rand];
                images.push(img);
                images.push(img);

                //Delete the selected images from the SetOfImages Array
                setOfImages.splice(rand, 1);
            }
              randomizeImages();


            //organize images on the grid and hide them
            var toDisplay = "<ol>";
                for (var i = 0; i < 12; i++) {
                toDisplay = toDisplay + "<li>";
                toDisplay = toDisplay + "<img src = './images/" + images[i] + "'/>";
                toDisplay = toDisplay + "</li>";
                }
            toDisplay = toDisplay + "</ol>";
            document.getElementById('container').innerHTML = toDisplay;

            for (var i = 0; i < 12; i++){
            $("img")[i].setAttribute('class', 'hide');
            }

            clickable(true);




//randomize Array of the images
function randomizeImages() {
    Array.prototype.randomize = function()
    {
        var i = this.length, j, temp;
        while ( --i )
        {
            j = Math.floor( Math.random() * (i - 1) );
            temp = this[i];
            this[i] = this[j];
            this[j] = temp;
        }
    };
    images.randomize();
}


function flip() {
        img_class = this.getElementsByTagName('img')[0].getAttribute('class');
        if (((count < 2) && (img_class != "reversed")) === true) {
               count++;
               console.log(count);
               this.getElementsByTagName('img')[0].setAttribute('class', 'show reversed');

  //guess 1
            if (count === 1) {
                guess1 = this.getElementsByTagName('img')[0].getAttribute('src');
                console.log(guess1);

            }

   //guess 2
            else {
                    guess2 = this.getElementsByTagName('img')[0].getAttribute('src');
                    console.log(guess2);

                    for (var i = 0; i < 12; i++){
                        $("li")[i].removeEventListener('click', flip);
                            }

                    if (guess1 === guess2) {
                        console.log("match");
                        var matched = document.getElementsByClassName('reversed').length;
                        console.log(matched);
                        document.getElementsByClassName('reversed')[1].setAttribute('class', 'match');
                        document.getElementsByClassName('reversed')[0].setAttribute('class', 'match');
                        setTimeout(clickable(false), 1500);

                    } else {
                        console.log("miss");
                        setTimeout(new_attempt, 1500);  //img hide after 1s
                        }
            count = 0;
        }
        }

}
//reset the class of all 'non-matched' img to 'hide'
function new_attempt() {
    var pic = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        if (pic[i].getAttribute('class') != 'match') {
                pic[i].setAttribute('class', 'hide');
                $("li")[i].addEventListener('click', flip);
                }
            }
        }

function clickable(isClickable) {
    var pic = document.getElementsByTagName('img');
    if (isClickable = true)
        {
            for (var i = 0; i < 12; i++)
                {
                if (pic[i].getAttribute('class') != 'match') {
                    $("li")[i].addEventListener('click', flip);}
                }
        } else {
                for (var i = 0; i < images.length; i++) {
                        if (pic[i].getAttribute('class') != 'match') {
                            $("li")[i].removeEventListener('click', flip);}}
                }
}



