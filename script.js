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

    $('tbody').append(`
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
};

function onDelete(){
    $(this).closest('tr').remove();
}

