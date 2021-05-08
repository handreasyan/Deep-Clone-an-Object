let obj = {
  name: "Object",
  age: 15,
  friends: [1, 2, 3, 4],
  undef: undefined,
  nul: null,
  nan: NaN,
  q: {
    w: {
      e: {
        r: "t",
        y: [
          "ok",
          [1, 23, "s"],
          { name: "iok", ok: [{ a: "A", b: "B", c: [1, 32], f: { a: "A" } }] },
          function ok() {
            alert("x");
          },
        ],
      },
    },
    objec: {
      arr: [
        1,
        2,
        { aa: 11, ar: [74, "asd", true] },
        true,
        () => {
          alert("Some");
        },
      ],
    },
    truee: false,
  },
};

function deepClone(obj) {
  let newObj = Array.isArray(obj) ? [] : {};
  for (let item in obj) {
    if (typeof obj[item] === "object" && obj[item] !== null) {
      newObj[item] = deepClone(obj[item]);
    } else {
      newObj[item] = obj[item];
    }
  }
  return newObj;
}
console.log(deepClone(obj));
