function addRow() {
    // Get table element
    var table = document.getElementById("NewTable");
  
    // Insert new row at the last position
    var newRow = table.insertRow(-1);
  
    // Insert cells into the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
  
    // Set the value of the new cells
    cell1.innerHTML = "New Row, Column 1";
    cell2.innerHTML = "New Row, Column 2";
    cell3.innerHTML = "New Row, Column 3";
  }
  var currentId = 1;
  function generateId() {
    return currentId++;
  }
  var newItem = {
    id: generateId(),
    name: "New Item"
  };
