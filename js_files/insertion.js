async function insertion(){
    console.log('In insertion()');

    const element = document.querySelectorAll(".bar");
    element[0].style.background = '#4fc255';
    for(let i = 1; i < element.length; i++){
        console.log('In loop');
        let j = i - 1;
        let val = element[i].style.height;
        element[i].style.background = 'red';

        await waitforme(delay); // For animation perpuses

        while(j >= 0 && (parseInt(element[j].style.height) > parseInt(val))){
            console.log('In while loop');

            element[j].style.background = 'red';
            element[j + 1].style.height = element[j].style.height;
            j--;

            await waitforme(delay);

            for(let k = i; k >= 0; k--){
                element[k].style.background = '#4fc255';
            }
        }
        element[j + 1].style.height = val;

        element[i].style.background = '#4fc255';
    }
}

const insertionSortButton = document.querySelector(".insertionSort");

insertionSortButton.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    await insertion();

    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});