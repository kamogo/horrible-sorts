# Horrible Sorts

The worst sorting algorithms known to man. 

## BogoSort

Shuffles the array until it is sorted. 

    var arr = [5, 3, 2, 4];
    arr = HorribleSorts.Bogosort(arr);
    //arr now contains [2, 3, 4, 5]

## Short Sort

Return the part of the array that is sorted.

    var arr = [3, 4, 5, 2, 4];
    arr = HorribleSorts.ShortSort(arr);
    //arr now contains [3, 4, 5];

## Refresh Sort

Refresh the page until the array is sorted. Works great when your array consists of solely Math.random().

    var arr = [Math.random(), Math.random(), Math.random()];
    arr = HorribleSorts.RefreshSort(arr);
    //page will refresh until arr is in order

## Drop Sort

Drop all elements not in order.

    var arr = [4, 5, 2, 7];
    arr = HorribleSorts.DropSort(arr);
    //arr now contains [4, 5, 7]

## Miracle Sort

Console log X number of praying hand emojis where X is the length of the array. Return the array in hopes that a divine spirit has intervened and the array is now sorted. 

    var arr = [4, 1, 3];
    arr = HorribleSorts.MiracleSort(arr);
    //arr will (hopefully) contain [1, 3, 4] and the console will show 🙏🙏🙏