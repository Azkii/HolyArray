## !!steps Step 1: Creating the Array

```js !
// An empty array is created.
// Since it contains no elements yet, the internal element kind is set to NO_ELEMENTS.

const array = []
```

## !!steps Step 2: Pushing Small Integer (Smi)

```js !
const array = []

// The integer 4 is added to the array.
// Since it's a small integer (Smi), V8 changes the element kind to PACKED_SMI_ELEMENTS.
array.push(4)
```

## !!steps Step 3: Pushing Another Small Integer

```js !
const array = []
array.push(4)

// The integer 2 is added to the array.
// Since it's also a small integer (Smi), the element kind remains PACKED_SMI_ELEMENTS.
array.push(2)
```

## !!steps Step 4: Pushing a Floating-Point Number

```js !
const array = []
array.push(4)
array.push(2)

// The floating-point number 13.37 is added to the array.
// Since floating-point numbers (doubles) cannot be represented as Smi,
// V8 changes the element kind to PACKED_DOUBLE_ELEMENTS.
array.push(13.37)
```

## !!steps Step 5: Pushing a String Literal

```js !
const array = []
array.push(4)
array.push(2)
array.push(13.37)

// The string 'x' is added to the array.
// Since strings cannot be represented as Smi or doubles,
// V8 changes the element kind to PACKED_ELEMENTS.
array.push("x")
```
