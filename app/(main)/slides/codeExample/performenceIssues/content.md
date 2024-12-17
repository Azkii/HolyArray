## !!steps Step 1: Assign "Doom" to an index

We assign string "Doom" to index 42 in the array.
Since this index is large and non-sequential, it makes the array sparse, with gaps at other indices.

```js !
const highiestIndex = 42
const index = 5
const array = ["Maelstrom"]
array[highiestIndex] = "Doom"
```

## !!steps Step 2: Bounds Check

We check if the index 5 is within the bounds of the array.
The index 5 is still within bounds.

```js !
const highiestIndex = 42
const index = 5
const array = ["Maelstrom"]
array[highiestIndex] = "Doom"

index >= 0 && index < array.length //bounds check
// -> true ✅
```

## !!steps Step 3: Check Array's Own Property

Next, we check if the array owns the property at index 5. Since the array is sparse, it doesn't own this index in a normal way — it's not directly added to the array's properties. Therefore, the check returns false.

```js !
const highiestIndex = 42
const index = 5
const array = ["Maelstrom"]
array[highiestIndex] = "Doom"

index >= 0 && index < array.length //bounds check
// -> true ✅

array.hasOwnProperty(index)
// -> false ❌
```

## !!steps Step 4: Check Array's Prototype Property

Next, we check if Array.prototype owns the property at index 5.
Index 5 is not in the prototype chain.

```js !
const highiestIndex = 42
const index = 5
const array = ["Maelstrom"]
array[highiestIndex] = "Doom"

index >= 0 && index < array.length //bounds check
// -> true ✅

array.hasOwnProperty(index)
// -> false ❌

Array.prototype.hasOwnProperty(index)
// -> false ❌
```

## !!steps Step 5: Check Object Prototype Property

Next, we check if Object.prototype owns the property at index 5.
This also returns false, because Object.prototype doesn't contain the custom index we assigned to the array.

```js !
const highiestIndex = 42
const index = 5
const array = ["Maelstrom"]
array[highiestIndex] = "Doom"

index >= 0 && index < array.length //bounds check
// -> true ✅

array.hasOwnProperty(index)
// -> false ❌

Array.prototype.hasOwnProperty(index)
// -> false ❌

Object.prototype.hasOwnProperty(index)
// -> false ❌
```

## !!steps Step 6: Prototype Chain Ends

The prototype chain ends after reaching Object.prototype.
No further checks are made, and the index isn't found in the prototype chain, returning undefined.

```js !
const highiestIndex = 42
const index = 5
const array = ["Maelstrom"]
array[highiestIndex] = "Doom"

index >= 0 && index < array.length //bounds check
// -> true ✅

array.hasOwnProperty(index)
// -> false ❌

Array.prototype.hasOwnProperty(index)
// -> false ❌

Object.prototype.hasOwnProperty(index)
// -> false ❌

// Prototype ends after reaching Object.prototype and returns undefined
```
