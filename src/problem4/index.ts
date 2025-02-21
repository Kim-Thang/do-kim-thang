function sum_to_n_a(n: number): number {
    if (n < 0) {
        return 0;
    }

    if (0 === n || 1 === n) {
        return n;
    }

    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    
    return total;
}
/*
Time Complexity: O(n)
Efficiency:
  - Simple approach because the function uses a for loop to iterate from 1 to n.
  - If n is large, it might take longer to compute due to the loop.
*/

function sum_to_n_b(n: number): number {
    if (n < 0) {
        return 0;
    }

    if (0 === n || 1 === n) {
        return n;
    }

    return n + sum_to_n_b(n - 1);    
}
/*
Time Complexity: O(n)
Efficiency:  
  - If n is large, it may lead to a stack overflow error due to deep recursion.
*/

function sum_to_n_c(n: number): number {	
    if (n < 0) {
        return 0;
    }

    if (0 === n || 1 === n) {
        return n;
    }

    return (n * (n + 1)) / 2;
}
/*
Time Complexity: O(1)
Efficiency:  
  - This is the most efficient approach, as it provides the result in constant time without iteration or recursion.
*/


console.log('1', sum_to_n_a(200));
console.log('2', sum_to_n_b(200));
console.log('3', sum_to_n_c(200));