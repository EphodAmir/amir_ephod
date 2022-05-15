
      
function submit() {
    
        // document.getElementById("form").submit();
        document.getElementById("form").style.visibility='hidden';
        document.getElementById("button").innerHTML = 'Done';
       var sub_title =  document.getElementById("h3");
       sub_title.innerHTML = 'Thank You!!' ;
       sub_title.style.fontSize ="xx-large";
       sub_title.animate([
        // keyframes
        { transform: 'translateY(300px)' },
        { transform: 'translateY(0px)' },
        { transform: 'translateY(300px)' },
    
      ], {
        // timing options
        duration: 3000,
        iterations: 3
      })
        // document.getElementById("h3").style.backgroundColor = "red"
        alert("Thank you! We will contact you ASAP");
}