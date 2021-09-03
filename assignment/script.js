// ## Checklist
// - [x] html, client.js, jquery.js, log “DOM ready”
// - [x] building template in html (inputs / table)
// - [x] add some styling for the table
// - [x] button click that logs to the console
// - [x] assign input to variables
// - [x] append to the DOM using those variables
// - [x] global variables for monthly cost
// - [x] append monthly cost to the DOM
// - [x] logic for background color on the monthly costs
// - [x] delete button that removes a row

// ### Stretch
// - [ ] update the total cost on delete of a row
// - [x] array and objects to hold information
// - [ ] alert the user of missing fields


$(document).ready(readyNow);

function readyNow() {
    console.log('DOM ready!');
    $('#submit-button').on('click', addEmployee);
    $(document).on('click', '#delete-button', removeEmployee);
}

// global array for employees data
let employees = [];

// global variables for monthly cost
let monthlyCost = 0;

function addEmployee() {

    console.log('Submit button clicked!');

    // storing info into emp object
    employee = getEmployee();

    // Pushing employee info to employees array
    employees.push(employee);

    // append to DOM
    appendToDOM();

    // clear input fields
    clearInput();

    // logic for background color on the monthly costs
    monthlyCost = monthlyTotalCost();
    if (monthlyCost > 20000) {
        $('#monthly-total').text(`Monthly Total: $${(monthlyCost).toFixed(2)}`);
        $('#monthly-total').css('background-color', 'red')
    } else {
        $('#monthly-total').text(`Monthly Total: $${(monthlyCost).toFixed(2)}`);
    }
}

function getEmployee() {
    let employee = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        employeeID: $('#id').val(),
        title: $('#title').val(),
        salary: Number($('#annual-salary').val())
    }
    return employee;
}

function appendToDOM() {
    // Empty the table
    $('#tableEmployee').empty();
    
    // Loop though employees array and append to DOM
    for (let employee of employees) {
        $('#tableEmployee').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.employeeID}</td>
                <td>${employee.title}</td>
                <td>${employee.salary}</td>
                <td><button id= "delete-button">Delete</button></td>
            </tr>
    `);
    }
}


function monthlyTotalCost() {
    let totalCost = 0;
    for (let employee of employees) {
        totalCost += (employee.salary / 12);
    }
    return totalCost;
}

function clearInput() {
    //clearing input and focus cursor 
    $('input').val('');
    $('#first-name').focus();
}

// delete button that removes a row
function removeEmployee() {
    console.log('Delete button clicked!');
    $(this).parent().parent().remove();
}



