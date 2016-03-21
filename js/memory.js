var images = ['<i class="fa fa-star-o fa-4"></i>',
'<i class="fa fa-rocket-o fa-4"></i>',
'<i class="fa fa-spoon fa-4"></i>',
'<i class="fa fa-heart fa-4"></i>',
'<i class="fa fa-child fa-4"></i>',
'<i class="fa fa-certificate fa-4"></i>',
'<i class="fa fa-diamond fa-4"></i>',
'<i class="fa fa-birthday-cake fa-4"></i>',
'<i class="fa fa-coffee fa-4"></i>',
'<i class="fa fa-eye fa-4"></i>',
'<i class="fa fa-magic fa-4"></i>',
'<i class="fa fa-leaf fa-4"></i>',
'<i class="fa fa-lemon-o fa-4"></i>',
'<i class="fa fa-plug fa-4"></i>',
'<i class="fa fa-square fa-4"></i>',
'<i class="fa fa-smile-o fa-4"></i>',
'<i class="fa fa-tablet fa-4"></i>',
'<i class="fa fa-money fa-4"></i>',
'<i class="fa fa-paper-airplane-o fa-4"></i>',
'<i class="fa fa-lightbulb-o fa-4"></i>',
'<i class="fa fa-key fa-4"></i>',
'<i class="fa fa-ship fa-4"></i>',
'<i class="fa fa-tags fa-4"></i>',
'<i class="fa fa-tree fa-4"></i>'
];

for (var i = 0; i < 18; i++) {

}
randomizeImages();

// output images then hide them
var output = "<ol>";
for (var i = 0; i < 36; i++) {
    output += "<li>";
    output += images[i]
    output += "</li>";
}
output += "</ol>";
document.getElementById("container").innerHTML = output;
$("img").hide();

var guess1 = "";
var guess2 = "";
var count = 0;

$("li").click(function () {
    if ((count < 2) && ($(this).children("img").hasClass("face-up")) === false) {

        // increment guess count, show image, mark it as face up
        count++;
        $(this).children("img").show();
        $(this).children("img").addClass("face-up");

        //guess #1
        if (count === 1) {
            guess1 = $(this).children("img").attr("src");
        }

            //guess #2
        else {
            guess2 = $(this).children("img").attr("src");

            // since it's the 2nd guess check for match
            if (guess1 === guess2) {
                console.log("match");
                $("li").children("img[src='" + guess2 + "']").addClass("match");
            }

                // else it's a miss
            else {
                console.log("miss");
                setTimeout(function () {
                    $("img").not(".match").hide();
                    $("img").not(".match").removeClass("face-up");
                }, 1000);
            }

            // reset
            count = 0;
            setTimeout(function () { console.clear(); }, 60000);
        }
    }
});

// randomize array of images
function randomizeImages() {
    Array.prototype.randomize = function () {
        var i = this.length, j, temp;
        while (--i) {
            j = Math.floor(Math.random() * (i - 1));
            temp = this[i];
            this[i] = this[j];
            this[j] = temp;
        }
    };

    images.randomize();
}