(function (){

var txtbox = document.getElementById("txtInput");

eventUtility.addEvent(txtbox, "keypress",
	function(evt){

	var code = eventUtility.getCharCode(evt);
	alert (code);

	//	evt.charCode

		// A 65
		// B 66
		// Z 90
		// a 97
		// z 122
		// 0 48
		// 9 57
	});

})