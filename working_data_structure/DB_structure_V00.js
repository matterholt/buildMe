/* 
 main purpose for app is to see tool that are in groups
 
 so in order for user to get the tool list 
 first would have to check what groups that the user belongs to
 from that list would have to search for 
 and the retrieve all tool belong into group
*/

// STRUCTURED V00
const userSal = {
  _id: 1,
  name: "sal",
  groupsBelongID: [1, 2]
};

const groups = [
  {
    name: "group-a",
    _id: "1",
    tools: [
      { name: "hammer", owner: "jim", availability: true },
      { name: "drill", owner: "tim", availability: true },
      { name: "power washer", owner: "jim", availability: true },
      { name: "saw", owner: "sal", availability: false },
      { name: "file", owner: "sal", availability: true }
    ]
  },
  {
    name: "group-b",
    _id: "2",
    tools: [
      { name: "drill", owner: "sal", availability: true },
      { name: "power washer", owner: "sal", availability: true },
      { name: "saw", owner: "bill", availability: false }
    ]
  },
  {
    name: "group-c",
    _id: "3",
    tools: [
      { name: "drill", owner: "jim", availability: true },
      { name: "saw", owner: "val", availability: false }
    ]
  }
];
