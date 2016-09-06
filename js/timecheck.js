function timeCheckGreeting() {
    var greeting;
    var translation;
    var time = new Date().getHours();
    if (time < 12) {
        greeting = "Magandang Umaga!";
        translation = "(good morning!)";
    } else if (time < 17) {
        greeting = "Magandang Hapon!";
        translation = "(good afternoon)";
    } else {
        greeting = "Magandang Gabi!";
        translation = "(good evening)";
    }
document.getElementById("greeting").innerHTML = greeting;
document.getElementById("translation").innerHTML = translation;
}
