function changeImage() {
    var dropdown1 = document.getElementById("dropdown1");
    var dropdown2 = document.getElementById("dropdown2");
    var dropdown3 = document.getElementById("dropdown3");
    var selectedOption1 = dropdown1.options[dropdown1.selectedIndex].value;
    var selectedOption2 = dropdown2.options[dropdown2.selectedIndex].value;
    var selectedOption3 = dropdown3.options[dropdown3.selectedIndex].value;
    var image = document.getElementById("selectedImage");

    if (selectedOption1 === "Unicorn" && selectedOption2 === "oil painting" && selectedOption3 === "tropical paradise") {
        image.src = "assets/img/generator/image1.jpeg";
    } else if (selectedOption1 === "Unicorn" && selectedOption2 === "oil painting" && selectedOption3 === "Serengeti") {
        image.src = "assets/img/generator/image2.jpeg";
    } else if (selectedOption1 === "Unicorn" && selectedOption2 === "oil painting" && selectedOption3 === "frozen tundra") {
        image.src = "assets/img/generator/image3.jpeg";
    } else if (selectedOption1 === "Unicorn" && selectedOption2 === "watercolor" && selectedOption3 === "tropical paradise") {
        image.src = "assets/img/generator/image4.jpeg";
    } else if (selectedOption1 === "Unicorn" && selectedOption2 === "watercolor" && selectedOption3 === "Serengeti") {
        image.src = "assets/img/generator/image5.jpeg";
    } else if (selectedOption1 === "Unicorn" && selectedOption2 === "watercolor" && selectedOption3 === "frozen tundra") {
        image.src = "assets/img/generator/image6.jpeg";
    } else if (selectedOption1 === "Unicorn" && selectedOption2 === "pen and ink" && selectedOption3 === "frozen tundra") {
        image.src = "assets/img/generator/image7.jpeg";
    } else if (selectedOption1 === "Unicorn" && selectedOption2 === "pen and ink" && selectedOption3 === "frozen tundra") {
        image.src = "assets/img/generator/image8.jpeg";
    } else if (selectedOption1 === "Unicorn" && selectedOption2 === "pen and ink" && selectedOption3 === "frozen tundra") {
        image.src = "assets/img/generator/image9.jpeg";
    } else if (selectedOption1 === "Dragon" && selectedOption2 === "oil painting" && selectedOption3 === "tropical paradise") {
        image.src = "assets/img/generator/image10.jpeg";
    } else if (selectedOption1 === "Dragon" && selectedOption2 === "oil painting" && selectedOption3 === "Serengeti") {
        image.src = "assets/img/generator/image11.jpeg";
    } else if (selectedOption1 === "Dragon" && selectedOption2 === "oil painting" && selectedOption3 === "frozen tundra") {
        image.src = "assets/img/generator/image12.jpeg";
    } else if (selectedOption1 === "Dragon" && selectedOption2 === "watercolor" && selectedOption3 === "tropical paradise") {
        image.src = "assets/img/generator/image13.jpeg";
    } else if (selectedOption1 === "Dragon" && selectedOption2 === "watercolor" && selectedOption3 === "Serengeti") {
        image.src = "assets/img/generator/image14.jpeg";
    } else if (selectedOption1 === "Dragon" && selectedOption2 === "watercolor" && selectedOption3 === "frozen tundra") {
        image.src = "assets/img/generator/image15.jpeg";
    } else if (selectedOption1 === "Dragon" && selectedOption2 === "pen and ink" && selectedOption3 === "tropical paradise") {
        image.src = "assets/img/generator/image16.jpeg";
    } else if (selectedOption1 === "Dragon" && selectedOption2 === "pen and ink" && selectedOption3 === "Serengeti") {
        image.src = "assets/img/generator/image17.jpeg";
    } else if (selectedOption1 === "Dragon" && selectedOption2 === "pen and ink" && selectedOption3 === "frozen tundra") {
        image.src = "assets/img/generator/image18.jpeg";
    } else if (selectedOption1 === "Giant Robot" && selectedOption2 === "oil painting" && selectedOption3 === "tropical paradise") {
        image.src = "assets/img/generator/image19.jpeg";
    } else if (selectedOption1 === "Giant Robot" && selectedOption2 === "oil painting" && selectedOption3 === "Serengeti") {
        image.src = "assets/img/generator/image20.jpeg";
    } else if (selectedOption1 === "Giant Robot" && selectedOption2 === "oil painting" && selectedOption3 === "frozen tundra") {
        image.src = "assets/img/generator/image21.jpeg";
    } else if (selectedOption1 === "Giant Robot" && selectedOption2 === "watercolor" && selectedOption3 === "tropical paradise") {
        image.src = "assets/img/generator/image22.jpeg";
    } else if (selectedOption1 === "Giant Robot" && selectedOption2 === "watercolor" && selectedOption3 === "Serengeti") {
        image.src = "assets/img/generator/image23.jpeg";
    } else if (selectedOption1 === "Giant Robot" && selectedOption2 === "watercolor" && selectedOption3 === "frozen tundra") {
        image.src = "assets/img/generator/image24.jpeg";
    } else if (selectedOption1 === "Giant Robot" && selectedOption2 === "pen and ink" && selectedOption3 === "tropical paradise") {
        image.src = "assets/img/generator/image25.jpeg";
    } else if (selectedOption1 === "Giant Robot" && selectedOption2 === "pen and ink" && selectedOption3 === "Serengeti") {
        image.src = "assets/img/generator/image26.jpeg";
    } else if (selectedOption1 === "Giant Robot" && selectedOption2 === "pen and ink" && selectedOption3 === "frozen tundra") {
        image.src = "assets/img/generator/image27.jpeg";
    } else {
        image.src = "assets/img/generator/image21.jpeg";
    }
}