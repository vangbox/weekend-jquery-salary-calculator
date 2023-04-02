$(document).ready(onReady);

function onReady(){
    //console.log('Tester'); - it works!

    $('#submit-button').on('click', onSubmit);

    $('#tbody').on('click', '.delete-button', onDelete);
}

function onSubmit(event){
    event.preventDefault();
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let idNumber = $('#id-number').val();
    let jobTitle = $('#job-title').val();
    let annualSalary = $('#annual-salary').val();

    $('#tbody').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${annualSalary}</td>

            <td>
                <button class='delete-button'>🗑️</button
            </td>

        </tr>
    `)

    
    // let annualSalaryNum = Number($('#annual-salary').text());
    // let totalAnnualSalaryNum = Number($('#total-annual-salary').text());
    // let totalSum = annualSalaryNum + totalAnnualSalaryNum;
    // $('#total-annual-salary').text(totalSum);

    // let annualSalaryNum = $('#annual-salary');
    // let totalAnnualSalaryNum = $('#total-annual-salary');
    // let annualSalarySum = Number(annualSalaryNum.text()) + Number(totalAnnualSalaryNum.text());
    // $('#total-annual-salary').text(annualSalarySum);
    let start = 0;
    let num = Number($('#total-annual-salary').text()) + Number($('#annual-salary').text());
    let total = start + num;
    $('#total-annual-salary').text(total);
    

};


function onDelete(){
    $(this).closest('tr').remove();
}

