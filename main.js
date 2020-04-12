// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("resBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var answer = {
    "male": [
        "Hi man, you are very lucky for your career development in 2020. You are a natural leader in the team.",
        "Hi man, you are very lucky in higher education in 2020. Oversea travel can bring you fantastic experience.",
        "Hi man, you are very lucky with investment and inheritance in 2020. If you are married, your wife would have significant income increase.",
            "Hi man, you are very lucky at getting married this year. Anything related to partnership would be in your favor.",
             "Hi man, if you are looking for jobs, 2020 is especially a lucky year for you.",
             "Hi man, you are the luckiest to find your dream girl in 2020.",
             "Hi man, your family would be all well in 2020. Anything related with your parents, real-estate investment would be lucky.",
             "Hi man, the best news for you is that you can lie down and getting all the A+ in your study.",
             "Hi man, your income level will climb to a higher level than you expect!",
             "Hi man, you are so charming and attractive in 2020.",
             "Hi man, anything related to meditation, healing, alchemy is good for you.",
             "Hi man, you are so popular in the crowds. Friends and community would bring you the luckiest opportunities you want!"
            ],
    "female": [
        "Hi sweet, you are very lucky for your career development in 2020. You are a natural leader in the team.",
        "Hi sweet, you are very lucky in higher education in 2020. Oversea travel can bring you fantastic experience.",
        "Hi sweet, you are very lucky with investment and inheritance in 2020. If you are married, your husband would have significant income increase.",
            "Hi sweet, you are very lucky at getting married this year. Anything related to partnership would be in your favor.",
             "Hi sweet, if you are looking for jobs, 2020 is especially a lucky year for you.",
             "Hi man, you are the luckiest to find your dream girl in 2020.",
             "Hi sweet, your family would be all well in 2020. Anything related with your parents, real-estate investment would be lucky.",
             "Hi sweet, the best news for you is that you can lie down and getting all the A+ in your study.",
             "Hi sweet, your income level will climb to a higher level than you expect!",
             "Hi sweet, you are so charming and attractive in 2020.",
             "Hi sweet, anything related to meditation, healing, alchemy is good for you.",
             "Hi sweet, you are so popular in the crowds. Friends and community would bring you the luckiest opportunities you want!"]
    
};

var answerImage = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png"];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$('#resBtn').on('click', function(e) {
  // gather all checked radio-button values
  var choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();
    console.log(choices);
    if(choices.length < 2){
        console.log("error");  
        $('#editContent').text("Error Message: Please make sure you have selected your answers for both questions. Thank you:)");
    }
    else{
        $('#editContent').text(answer[choices[0]][choices[1]-1]);
        $("#resImg").attr("src", "images/"+answerImage[choices[1]-1]);
    }
    modal.style.display = "block";
    
    
    // now you have an array of choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
  // you'll need to do some calculations with this
  // a naive approach would be to just choose the most common option - seems reasonable
});