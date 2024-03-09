/*
  You are given the following array of stock prices (which are numbers) where the i-th element represents the stock price on day i:

  181,62,137,96,25,98,192,132,198,71,68,96,18,98

  Determine the maximum possible profit you can earn using as many transactions as you'd like. A transaction is defined as buying and then selling one share of the stock. Note that you cannot engage in multiple transactions at once. In other words, you must sell the stock before you buy it again.
  If no profit can be made, then the answer should be 0
*/

const maxProfit = (arr: number[]): number => {
  const days = arr.length
  let result = 0
  let currentValuePurchased = arr[0]

  for (let i = 0; i < days; i++) {
    if (arr[i] > currentValuePurchased) {
      result = result + (arr[i] - currentValuePurchased);
      currentValuePurchased = arr[i]
    } else {
      currentValuePurchased = arr[i]
    }
  }

  return result
}

// maxProfit([181, 62, 137, 96, 25, 98, 192, 132, 198, 71, 68, 96, 18, 98]) => 416
