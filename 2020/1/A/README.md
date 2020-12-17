# December 1 Prompt A

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

Your entries are provided in `input.txt`

### Solution

First idea is to sort the list into two lists above and blow half the target (`1010`). Then we can brute force comparing each pair of numbers from these lists.

`277 * 1743 = 482811`

### Improvements

A faster algorithm would be to sort the numbers, then iterate forward until we reach a number larger than 1010. For each number, binary search the list for the complement number (2020 - N).

This would reduce the time complexity to O(N/2 \* logN).
