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
            <td align="right">${annualSalary}</td>

            <td align="center">
                <button class='delete-button'>🗑️</button>
            </td>

        </tr>
    `)



    let totalAnnualSalaryNum = Number($('#total-annual-salary').text());
    let annualSalaryNum = annualSalary/12 +totalAnnualSalaryNum;
    // console.log(annualSalaryNum);
    $('#total-annual-salary').text(annualSalaryNum);

   
    if(annualSalaryNum > 20000){
    //console.log("test red"); test - it works!
        $('#total-annual-salary').css('background', 'red');
    }   
    else{
        $('#total-annual-salary').css('background');
    }
  
    //refresh the inputs
    $('#first-name').val('');
    $('#last-name').val('');
    $('#id-number').val('');
    $('#job-title').val('');
    $('#annual-salary').val('');

};



function onDelete(){

    $(this).closest('tr').remove();
}



    // $(function(){
    // // let start = 0;
    // let totalAnnualSalaryNum = Number($('#total-annual-salary').text());
    // let annualSalaryNum = Number($('#annual-salary').text());
    // totalAnnualSalaryNum += annualSalaryNum;
    // $('#total-annual-salary').text(totalAnnualSalaryNum);
    // })
    // let annualSalaryNum = Number($('#annual-salary').text());
    // let totalAnnualSalaryNum = Number($('#total-annual-salary').text());
    // let totalSum = annualSalaryNum + totalAnnualSalaryNum;
    // $('#total-annual-salary').text(totalSum);

    // let annualSalaryNum = $('#annual-salary');
    // let totalAnnualSalaryNum = $('#total-annual-salary');
    // let annualSalarySum = Number(annualSalaryNum.text()) + Number(totalAnnualSalaryNum.text());
    // $('#total-annual-salary').text(annualSalarySum);
    // let start = 0;

    // let start = 0;
    // let num = Number($('#annual-salary').text());
    // num + Number($('#total-annual-salary').text());
    // start += num;
    // Number($('#total-annual-salary').text(start));
    // console.log("test");
    
  

    // let annualTable = Number($('#annual-table').text);

    // for (let i = 0; i < annualTable.length; i++) {
    //     Number(annualTable[i].innterHTML);
    // }
    
    // console.log(annualTable);

    // $(function(){
    //         let annualSalary = Number($('#total-annual-salary').text());
    //         let totalAnnual = 0;
    //         for(let i=0;i<annualSalary.length;i++){
    //             if(Number(annualSalary[i].text()))
    //                 totalAnnual += Number(annualSalary[i].text());
    //         }
    //         $('#total-annual-salary').text = totalAnnual;
    //         Number($('#total-annual-salary').text(totalAnnual));
    // })