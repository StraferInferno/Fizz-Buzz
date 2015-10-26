var i = 0;
var x = 3;
var y = 5;

for (var i = 1; i <= 100; i++) {

    if ((i % x) === 0) {

        console.log("Fizz");
    } else if ((i % y) === 0)

    {

        console.log("Buzz");

    } else if ((i % y) === 0 && (i % x) === 0)

    {

        console.log("Fizz Buzz");

    } else {
        console.log(i);

    }


}
