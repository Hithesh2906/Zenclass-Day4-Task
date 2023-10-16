var json = [{
    "id" : "Hithesh1", 
    "msg"   : "JSON iterate over all for loops1 (for, for in, for of)",
    "task" : "Day-4 JSON Iteration1",
    "mail": "hithesh1@gmail.com"
},
{
    "id" : "Hithesh2", 
    "msg"   : "JSON iterate over all for loops2 (for, for in, for of)",
    "task" : "Day-4 JSON Iteration2",
    "mail": "hithesh2@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);
}
//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  console.log(json[key].msg);
}
}
//for Of
let text = "";
for (let y of json[key].id) {
 text += y; 
}
 console.log(text);
