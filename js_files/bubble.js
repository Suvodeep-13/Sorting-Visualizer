async function bubble(){
    console.log('In bubble');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length - 1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'red';
            ele[j + 1].style.background = 'red';
            if(parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = 'cyan';
            ele[j].style.background = 'cyan';
        }
        ele[ele.length - i - 1].style.background = '#4fc255';
    }
    ele[0].style.background = '#4fc255';
}

const bubbleSortButton = document.querySelector(".bubbleSort");
bubbleSortButton.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSizeSlider();
    enableSortingBtn();
    enableNewArrayBtn();
});