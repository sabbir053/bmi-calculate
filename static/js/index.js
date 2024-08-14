$(document).ready(function () {

    // clickable img code here
    $('.img-list').click(function () {
        var imgListSrc = $(this).attr("src");
        $('#main-img').attr('src', imgListSrc);
    })

    // const bmiText = $('#bmi');
    // const descText = $('#desc');
    // const form = $('form');

    // form.addEventListner('submit', onFormSubmit)

    // function onFormSubmit(e) {
    //     e.preventDefault();

    //     const weight = parseFloat(form.weight.value);
    //     const height = parseFloat(form.height.value);

    //     if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    //         alert("Please enter a valid weight and height");
    //         return;

    //         const heightInMeters = height / 100; // cm -> m
    //         const bmi = weight / Math.pow(heightInMeters, 2);
    //         const desc = interpretBMI(bmi);

    //         bmiText.textContent = bmi.toFixed(2);
    //         descText.innerHtml = `you are <strong> ${desc} </strong>`
    //     }

    //     function interpretBMI(bmi){
    //         if(bmi < 18.5) {
    //             return "underweight";
    //         } else if (bmi < 25){
    //             return "healthy";
    //         } else if (bmi < 30){
    //             return "Over weight";
    //         } else {
    //             return "Obese";
    //         }
    //     }
    // }


});


