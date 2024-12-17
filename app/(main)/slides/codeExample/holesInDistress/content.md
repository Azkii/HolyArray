## !!steps Step 1: Creating the Array with a Small Integer

```js !
// An array with the small integer 1 is created.
// Since it contains a small integer, the internal element kind is set to PACKED_SMI_ELEMENTS.

const array = [1]
```

## !!steps Step 2: Pushing a Floating-Point Number

```js !
const array = [1]

// The floating-point number 13.37 is added to the array.
// Since a floating-point number (double) cannot be represented as a Smi, V8 transitions the element kind to PACKED_DOUBLE_ELEMENTS.
array.push(13.37)
```

## !!steps Step 3: Creating a Hole in the Array

```js !
const array = [1]
array.push(13.37)

// A hole is added to the array by skipping an index.
// Adding a hole transitions the element kind to HOLEY_DOUBLE_ELEMENTS, since there are now gaps in the array.
array[5] = 1337
```

## !!steps Step 4: Adding a Regular Element

```js !
const array = [1]
array.push(13.37)
array[5] = 1337

// A regular element (string 'DOOM') is added to the array.
// The array now contains mixed types and still has holes, so V8 transitions the element kind to HOLEY_ELEMENTS.
array.push("DOOM")
```

## !!steps Extra: new Array(12)

```js !
// Array with 2 uninitialized slots will create (holey array).
const array = new Array(2)

// Assigning small integers (Smi) to holes.
array[0] = 1
array[1] = 2

// Although the values are set, the array is still "holey" because it's created with uninitialized slots.
```
