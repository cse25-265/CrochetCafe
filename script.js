function handleFormSubmit(event){
event.preventDefault();

let message=document.getElementById("form-msg");

message.textContent="✦ Thank you! Your message has been sent successfully.";
message.style.display="block";

event.target.reset();

setTimeout(function(){
message.style.display="none";
},4000);
}
