var reverseVowels = function(s) {
    let volwels = {
        a: 1,
        e:1,
        i:1,
        o:1,
        u:1
    }


    let left = 0;
    let right = s.length-1;

    arr = s.split('');

    while(left < right){
        if(volwels[arr[left]] && volwels[arr[right]]){
            
            let temp = arr[right];

            arr[right] = arr[left]
            arr[left] = temp;

            left++;
            right--;
        }else if(volwels[arr[left]] && !volwels[arr[right]]){
            right--;
        }else {
            left++;
        }
    }

    return arr.join('')
};

reverseVowels("hello")