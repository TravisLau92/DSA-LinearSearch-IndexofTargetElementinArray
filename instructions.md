**Title: Index of Target Element in Array**

**Objective:**
In this coding exercise, you will create a JavaScript function that performs a linear search to find the index of a specific element in an array. Your function should return the index of the element if found, or -1 if the element is not present.

For example, When using the following input array:
```js
const input = [34, 5, 0, -2, 12, -60, 1, 18, 3, 39, 27, -1, 1000, 32, 4, 9];
const targetElement = 39;

findIndex(input, targetElement);
```

You should be able to produce the following output:
```js
Index of 39: 9
```

If element not found:
```js
Index of 5000: -1
```

<details>
<summary>Hints</summary>
  
1. Create a function `findIndex(arr, target)` that accepts an array `arr` and a target element `target` to search for.
2. Initialize a variable `index` to -1 (indicating the element is not found initially).
3. Use a for loop to iterate through the elements of the array `arr`.
4. Inside the loop, check if the current element is equal to the `target`.
5. If the current element is equal to the `target`, update the `index` variable with the current index.
6. After the loop, return the `index`.
</details>
