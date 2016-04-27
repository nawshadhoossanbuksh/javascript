(function() {

var txtbox = document.getElementById("txtInput");

eventUtility.addEvent(document, "keypress",
    function(evt) {
        var code = evt.keyCode,
            ctrlKey = evt.ctrlKey;
            
        if (ctrlKey && code === 67) {
            alert("You pressed ctrl+B");
        }
        
        // else alert(code);
        
        
        
        //alert(code);
        
        //evt.charCode
        
        // A 65
        // B 66
        // Z 90
        
        
        // 0 48
        // 9 57
        
    });

// keydown
// keyup
// keypress
    
    
var form=document.getElementById("theForm"),
    button = form.myButton,
    textbox = form.myTextBox,
    textarea = form.myTextArea,
    select = form.mySelect;

eventUtility.addEvent(form, "submit", function(evt){
    eventUtility.preventDefault(evt);

});

eventUtility.addEvent(button, "click", function(evt){
    // alert ("You clicked me!");
    var target = eventUtility.getTarget(evt);
    if (textbox.value == ""){
        alert ("Please iput data in text box");
        textbox.focus();
    }
    if (textarea.value == ""){
        alert("Please input data in text area");
        textarea.focus();
    }
    else textarea.select();

    var index = select.selectedIndex;
    var option = select.options[index];
    alert(option.value);

});

    
    
}());