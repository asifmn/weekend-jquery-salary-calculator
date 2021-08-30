$(document).ready(readyNow);


function readyNow() {
    $('#submit-button').on('click', addEmployee);
    $('#tableEmployee').on('click', '#delete-button', removeEmployee);
}

let monthlyTotal = [];
function addEmployee() {

    // create employee object
    let employee = {
        firstName: $('#firstname').val(),
        lastName: $('#lastname').val(),
        title: $('#id').val(),
        employeeID: $('#title').val(),
        salary: $('#annualsalary').val()
    }

    $('#tableEmployee').append(`<tr>
    <td>${lastName}, ${firstName}</td>
    <td>${title}</td>
    <td>${employeeID}</td>
    <td id="annualsalary">${salary}</td>
    <td><button id= "delete-button">Delete</button></td></tr>`);

    // tally for sum of monthly total
    monthlyTotal.push(annualSalary);
    let total = 0;
    for (i of monthlyTotal) {
        total += Number(i)
    }

    total /= 12;

    //turns total red if over $20,000
    if (total > 20000) {
        $('#monthly-total').text(`Monthly Total:$ ${(total).toFixed(2)}`).css('background-color', 'red')
    } else {
        $('#monthly-total').text(`Monthly Total:$ ${(total).toFixed(2)}`);
    }

    //clear input fields
    $('#firstname').val('');
    $('#lastname').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualsalary').val('');
}

function removeEmployee() {
    $(this).parent().parent().remove();
}