function buttonclick(val){
    document.getElementById("screen").value+=val //saving the entered values without deleting the previous entered
}
function clearscreen(){
    document.getElementById("screen").value=""// to clearing the values
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}