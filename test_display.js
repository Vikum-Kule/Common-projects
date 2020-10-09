var row =1;

var add = document.getElementById("add");
add.addEventListener("click", displayDetails);

function displayDetails() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var school = document.getElementById("school").value;

	if( !name || !age || !school){
		
		if (!name) {
			alert("please enter name....");
		}
		if (!age) {
			alert("please enter age....");
		}
		if (!school) {
			alert("please enter school....");
		}

		return;
	}
	var display = document.getElementById("display");
	var newRow = display.insertRow(row);

	var col1 = newRow.insertCell(0);
	var col2 = newRow.insertCell(1);
	var col3 = newRow.insertCell(2);

	col1.innerHTML = name;
	col2.innerHTML = age;
	col4.innerHTML = school;
	row++;

}
