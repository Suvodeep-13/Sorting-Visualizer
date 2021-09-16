async function selection(){
    console.log('In selection');
    const element = document.querySelectorAll(".bar");
    for(let i = 0; i < element.length; i++){
        console.log('In ith loop');
        let min_index = i;

        // change colour of the position to swap with next mini
        element[i].style.background = 'yellow';
        for(let j = i + 1; j < element.length; j++){
            console.log('In jth loop');
            element[j].style.background = 'red';

            await waitforme(delay);
            if(parseInt(element[j].style.height) < parseInt(element[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    element[min_index].style.background = 'cyan';
                }
                min_index = j;
            }
            else{
                element[j].style.background = 'cyan';
            }
        }
        await waitforme(delay);
        swap(element[min_index], element[i]);
        element[min_index].style.background = 'cyan';
        element[i].style.background = 'green';
    }
}

const selectionSortButton = document.querySelector(".selectionSort");
selectionSortButton.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    await selection();

    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});