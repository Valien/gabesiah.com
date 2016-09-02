function timeCheckGreeting() {
    var greeting;
    var time = new Date().getHours();
    if (time < 12) {
        greeting = "Magandang Umaga!";
    } else if (time < 17) {
        greeting = "Magandang Hapon!";
    } else {
        greeting = "Magandang Gabi!";
    }
document.getElementById("greeting").innerHTML = greeting;
}
