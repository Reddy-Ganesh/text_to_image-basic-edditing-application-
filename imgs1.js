var meme_take = [
    {
        "meme_name": "hello",
        "meme_img": "https://scontent.fhyd1-7.fna.fbcdn.net/v/t1.6435-9/123581715_996435494199099_3092665313866129353_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aDHbe5eICYgQ7kNvgH6Iyj5&_nc_ht=scontent.fhyd1-7.fna&oh=00_AYCxzHEShiEIK-qsKJbb23u4EGM5m3afWyyqGRslmiDefg&oe=669DED52",
        
    },
    {
        "meme_name": "Adhurs (telugu) Blank Template - Imgflip",
        "meme_img": "https://i.imgflip.com/5hy5bl.png",
        
    },
    {
        "meme_name": "Annaya",
        "meme_img": "https://scontent.fhyd1-5.fna.fbcdn.net/v/t1.6435-9/127237472_1018382818671033_7268268966987559879_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5jFKd8PX-RsQ7kNvgHJgDbW&_nc_ht=scontent.fhyd1-5.fna&oh=00_AYDp8bF8zNppH9Y4WgDR0DEJXJVCHvEB58ntKB_uM_lOCg&oe=669E15A2",
        
    },
    {
        "meme_name": "haha",
        "meme_img": "https://scontent.fhyd1-2.fna.fbcdn.net/v/t1.6435-9/125786537_1010884889420826_3616921211996086936_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f0thuIzbemMQ7kNvgFsR7WM&_nc_ht=scontent.fhyd1-2.fna&oh=00_AYCvN3Ke1reR-WwABXcUR17G5VidRB2c8mpuXRoh2bzUvw&oe=669DEBC8",
        
    },
    {
        "meme_name": "Sambar.....",
        "meme_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG09Q_Spkg7tS6GgdBcPz3klpJynUehs4CuQ&s",
        
    },
    {
        "meme_name": "Telugu Meme Templets Ekkada Dorukutai ??",
        "meme_img": "https://scontent.fhyd1-6.fna.fbcdn.net/v/t1.6435-9/125338936_1008894252953223_2344866627971873124_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N3s9K0Yb6jwQ7kNvgE4PECH&_nc_ht=scontent.fhyd1-6.fna&oh=00_AYD8R3t1WumaJI6I3RedGVgiHac_gtx7TSrgYdVVFeBT8g&oe=669E079D",
       
    },
    {
        "meme_name": "chalu",
        "meme_img": "https://scontent.fhyd1-6.fna.fbcdn.net/v/t1.6435-9/125338936_1008894252953223_2344866627971873124_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N3s9K0Yb6jwQ7kNvgE4PECH&_nc_ht=scontent.fhyd1-6.fna&oh=00_AYD8R3t1WumaJI6I3RedGVgiHac_gtx7TSrgYdVVFeBT8g&oe=669E079D",
        
    },
    {
        "meme_name": "Charii",
        "meme_img": "https://scontent.fhyd1-3.fna.fbcdn.net/v/t1.6435-9/115786724_910326339476682_7173112790316212366_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cAdCvpkDSwsQ7kNvgHHNfzy&_nc_ht=scontent.fhyd1-3.fna&oh=00_AYDnixqwvmIEHHPq6ZWkOISwbRfDlnP9Bg1ezU-_7oRwSg&oe=669DE9C0"
    },
    {
        "meme_name": "okay",
        "meme_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTir9a717_oodUS8kVC4Y6zgJT8ZASMVD2eMg&s",
        
    },
    {
        "meme_name": "aha",
        "meme_img": "https://www.plantvine.com/plants/Philodendron-Goeldii-2-800x1000.jpg",
       
    },
     {
        "meme_name": "chinna",
         "meme_img": "https://scontent.fhyd1-2.fna.fbcdn.net/v/t1.6435-9/112215388_910329086143074_8989794103014052266_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EljxUYbluHgQ7kNvgHy018_&_nc_ht=scontent.fhyd1-2.fna&oh=00_AYDiDfYkWw2PFGQIhC9g5Pyx1F1t-3RX8shkKLJFMKVzLA&oe=669DF802",

    }
];




function indoor() {
    var x = document.getElementById("memes10");

    x.innerHTML = '';

    for (var i = 0; i < meme_take.length; i++) {
        var y = document.createElement("div");
        var z = document.createElement("div");

        y.className = "meme1";
        z.className = "meme-image";

        var imgElement = document.createElement("img");
        var meme_name = document.createElement("div");
        meme_name.className = "meme_name";

        var meme_name_1 = document.createElement("p");
        var currentMeme = meme_take[i];

        y.id = currentMeme["meme_name"];
        meme_name_1.innerHTML = currentMeme["meme_name"];

        meme_name.appendChild(meme_name_1);
        imgElement.src = currentMeme["meme_img"];
        z.appendChild(imgElement);

        y.appendChild(z);
        y.appendChild(meme_name);

        y.onclick = showFullview.bind(null, currentMeme);

        x.appendChild(y);
    }
    x.style.display = "grid";
}

function showFullview(meme) {
    // Implement the logic for showing the full view of the meme
    var x = document.getElementById("memes10");
    x.style.display = "none"
    var y = document.getElementById("images1");
    var z = document.getElementById("create");

    var z1 = document.getElementById("create1")
    var z2 = document.getElementById("pre")
    y.style.display = "none"
    z.style.display = "none"
    z1.style.display = "none"
    z2.style.display = "none"
    
    var add2 = document.getElementById("ADD1")
    var add1 = document.getElementById("ADD")
    add1.style.display="flex"
    add2.style.display = "block"
    x.style.display = "none"
    var fullviewImg = document.getElementById("fullview-img");
    var fullviewPlantName = document.getElementById("memes_dis");
   


    fullviewImg.src = meme["meme_img"];
    fullviewPlantName.textContent = meme["meme_name"];
    
   


    console.log(meme);
}

document.addEventListener("DOMContentLoaded", function () {
    indoor();
});

function addtext() {
    var fullviewImg1 = document.getElementById("fullview-img1");
    var input1 = document.getElementById("text-input");
    var colorSelect = document.getElementById("colorPicker"); // Assuming you have a color picker input
    var fontSizeInput = document.getElementById("fontSizeInput"); // Assuming you have an input for font size

    var text1 = document.createElement("p");
    text1.id = "draggableText";
    text1.innerHTML = input1.value;
    text1.style.position = "absolute";
    text1.style.cursor = "move";
    text1.style.left = "0px";
    text1.style.top = "0px";
    text1.style.color = colorSelect.value; // Set text color
    text1.style.fontSize = fontSizeInput.value + "px"; // Set font size

    text1.setAttribute("draggable", "true");

    fullviewImg1.appendChild(text1);

    text1.onmousedown = startDrag;
}

function startDrag(event) {
    event.preventDefault();
    var element = event.target;
    var shiftX = event.clientX - element.getBoundingClientRect().left;
    var shiftY = event.clientY - element.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        element.style.left = pageX - shiftX + 'px';
        element.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null; // Clear the event handler
    };
}



document.ondragstart = function () {
    return false;
};


function download() {
    const link = document.createElement('a');
    link.download = 'random-image.png';
    link.href = document.getElementById('generatedImage').src;
    link.click();
}
function cross() {
    var x = document.getElementById("ADD")
    var y = document.getElementById("images 1");
    var z = document.getElementById("create");
    var x1 = document.getElementById("memes10");


    var z1 = document.getElementById("create1")
    var z2 = document.getElementById("pre")
    y.style.display = "block"
    z.style.display = "block"
    z1.style.display = "block"
    z2.style.display = "block"
    x.style.display = "none"
    x.style.display="grid"
    
}