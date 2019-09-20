/* 
 main purpose for app is to see tool that are in groups
 
create an database instance for each group
-> thinking this would be probably be the best option, 
not sure how to implement it into the user database to be search able

*/

// STRUCTURED V01
const userSal = {
  _id: 1,
  name: "sal",
  groupsBelongID: [1, 2]
};

const group_1 = {
  name: "group-a",
  _id: "1",
  tools: [
    { name: "hammer", owner: "jim", availability: true },
    { name: "drill", owner: "tim", availability: true },
    { name: "power washer", owner: "jim", availability: true },
    { name: "saw", owner: "sal", availability: false },
    { name: "file", owner: "sal", availability: true }
  ]
};

const group_2 = {
  name: "group-b",
  _id: "2",
  tools: [
    { name: "drill", owner: "sal", availability: true },
    { name: "power washer", owner: "sal", availability: true },
    { name: "saw", owner: "bill", availability: false }
  ]
};
const group_3 = {
  name: "group-c",
  _id: "3",
  tools: [
    { name: "drill", owner: "jim", availability: true },
    { name: "saw", owner: "val", availability: false }
  ]
};
