// let delay = 30;

async function merge(element, low, mid, high){
    console.log('In merge');
    console.log(`low=${low}, mid=${mid}, high=${high}`);
    const n1 = mid - low + 1;
    const n2 = high - mid;
    console.log(`n1=${n1}, n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2);

    // Doing for the left part (low -> mid)
    for(let i = 0; i < n1; i++){
        await waitforme(delay);
        console.log('In merge left loop');
        console.log(element[low + 1].style.height + 'at' + (low + i));

        element[low + i].style.background = 'orange';
        left[i] = element[low + i].style.height;
    }
    // Doing for the right part aswell (mid + 1 -> high)
    for(let i = 0; i < n2; i++){
        await waitforme(delay);
        console.log('In merge right loop');
        console.log(element[mid + 1 + i].style.height + 'at' + (mid + 1 + i));

        element[mid + 1 + i].style.background = 'yellow';
        right[i] = element[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitforme(delay);
        console.log('In merge while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));

        // To add color for which two are being compered for merging
        if(parseInt(left[i]) <= parseInt(right[j])){
            console.log('In merge while loop in if condition');

            if((n1 + n2) == element.length){
                element[k].style.background = 'green';
            }
            else{
                element[k].style.background = 'lightgreen';
            }
            element[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            console.log('In merge while loop else condition');
            if((n1 + n2) == element.length){
                element[k].style.background = 'green';
            }
            else{
                element[k].style.background = 'lightgreen';
            }
            element[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitforme(delay);
        console.log('In while loop if n1 is left');

        if((n1 + n2) == element.length){
            element[k].style.background = 'green';
        }
        else{
            element[k].style.background = 'lightgreen';
        }
        element[k].style.height = left[i];
        i++;
        k++;
    }

    while(j < n2){
        await waitforme(delay);
        console.log('In while loop if n2 is left');

        if((n1 + n2) == element.length){
            element[k].style.background = 'green';
        }
        else{
            element[k].style.background = 'lightgreen';
        }
        element[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(element, l, r){
    console.log('In megreSort()');
    if(l >= r){ // just like a base condition in recursion
        console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    console.log(`left=${l} mid=${m} right=${r}`, typeof(m));
    await mergeSort(element, l, m);
    await mergeSort(element, m + 1, r);
    await merge(element, l, m, r);
}

const mergeSortButton = document.querySelector(".mergeSort");
mergeSortButton.addEventListener('click', async function(){
    let element = document.querySelectorAll('.bar');
    let lo = 0;
    let hi = parseInt(element.length) - 1;

    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    await mergeSort(element, lo, hi);

    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});