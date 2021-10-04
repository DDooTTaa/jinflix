const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const other = ["Sun", "Sat", "any"];

const a = (day, index) => console.log(`#${index + 1}, ${day}`)

const allday = days.map(a);

console.log(allday);

console.log(days + other);

const b = [...days, ...other];

console.log(b);

const abc = {
    "b": 2,
    "c": 3,
    "d": 4,
    "e": {
        "f": ["ddddd"],
        "g": ["KKKKKK"]
    }
}


console.log(abc.e.f);