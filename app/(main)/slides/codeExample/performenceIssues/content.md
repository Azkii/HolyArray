## !!steps

This is the first step. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```js !
const index = 42
const array = ["Maelstrom"]
array[index] = "Doom"
```

## !!steps

The second step, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```js !
const index = 42
const array = ["Maelstrom"]
array[index] = "Doom"

array[index]
// -> false ❌
```

## !!steps

And the third step, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```js !
const index = 42
const array = ["Maelstrom"]
array[index] = "Doom"

array[index]
// -> false ❌

index >= 0 && index < array.length //bounds check
// -> true ✅
```

## !!steps

And the third step, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```js !
const index = 42
const array = ["Maelstrom"]
array[index] = "Doom"

array[index]
// -> false ❌

index >= 0 && index < array.length //bounds check
// -> true ✅

hasOwnProperty(array, index)
// -> false ❌
```

## !!steps

And the third step, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```js !
const index = 42
const array = ["Maelstrom"]
array[index] = "Doom"

array[index]
// -> false ❌

index >= 0 && index < array.length //bounds check
// -> true ✅

hasOwnProperty(array, index)
// -> false ❌

hasOwnProperty(Array.prototype, index)
// -> false ❌
```

## !!steps

And the third step, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```js !
const index = 42
const array = ["Maelstrom"]
array[index] = "Doom"

array[index]
// -> false ❌

index >= 0 && index < array.length //bounds check
// -> true ✅

hasOwnProperty(array, index)
// -> false ❌

hasOwnProperty(Array.prototype, index)
// -> false ❌

hasOwnProperty(Object.prototype, index)
// -> false ❌
```

## !!steps

And the third step, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```js !
const index = 42
const array = ["Maelstrom"]
array[index] = "Doom"

array[index]
// -> false ❌

index >= 0 && index < array.length //bounds check
// -> true ✅

hasOwnProperty(array, index)
// -> false ❌

hasOwnProperty(Array.prototype, index)
// -> false ❌

hasOwnProperty(Object.prototype, index)
// -> false ❌

// Prototype ends after reaching Object.prototype and returns undefined
```
