$(document).ready(onReady);

function onReady(){
    //console.log('Tester'); - it works!

    $('#submit-button').on('click', onSubmit);
    $('#tbody').on('click', '.delete-button', onDelete);
}

let annualSalaryNum;

function onSubmit(event){
    event.preventDefault();
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let idNumber = $('#id-number').val();
    let jobTitle = $('#job-title').val();
    let annualSalary = $('#annual-salary').val();
    
    render(firstName,lastName,idNumber,jobTitle,annualSalary);
    totalAnnualSalary(annualSalary);
    overAnnualSalaryNum(annualSalaryNum);
    resetInputs();
};

function render(firstName,lastName,idNumber,jobTitle,annualSalary){
    $('#tbody').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td align="right">${annualSalary}</td>

            <td align="center">
                <button class='delete-button'>🗑️</button>
            </td>

        </tr>
    `)
}

function totalAnnualSalary(annualSalary){
    let totalAnnualSalaryNum = Number($('#total-annual-salary').text());
    annualSalaryNum = annualSalary/12 +totalAnnualSalaryNum;
    // console.log(annualSalaryNum);
    $('#total-annual-salary').text(annualSalaryNum);
}

function overAnnualSalaryNum(annualSalaryNum){
    if(annualSalaryNum > 20000){
        //console.log("test red"); test - it works!
            $('#total-annual-salary').css('background', 'red');
        }   
        else{
            $('#total-annual-salary').css('background');
        }
}

function resetInputs(){
    //refresh the inputs
    $('#first-name').val('');
    $('#last-name').val('');
    $('#id-number').val('');
    $('#job-title').val('');
    $('#annual-salary').val('');
}

function onDelete(){

    $(this).closest('tr').remove();
}