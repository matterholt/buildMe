// STRUCTURE V02
// simple way to keep data, keep all data tied to the user, don't think that it a good way
// when someone add a tool to the group how is it possible to update??
const user_val = {
  _id: 2,
  name: "val",
  groups: [
    {
      name: "group-c",
      _id: "3",
      tools: [
        { name: "hammer", owner: "sal", availability: true },
        { name: "drill", owner: "val", availability: true },
        { name: "power washer", owner: "sal", availability: true },
        { name: "saw", owner: "val", availability: false },
        { name: "file", owner: "gal", availability: true }
      ]
    }
  ]
};

const user_bill = {
  _id: 3,
  name: "bill",
  groups: [
    {
      name: "group-b",
      _id: "2",
      tools: [
        { name: "hammer", owner: "jil", availability: true },
        { name: "drill", owner: "sal", availability: true },
        { name: "power washer", owner: "sal", availability: true },
        { name: "saw", owner: "bill", availability: false },
        { name: "file", owner: "jill", availability: true }
      ]
    }
  ]
};
