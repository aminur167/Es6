let message = true;

let myPromise = new Promise((resolve, reject) => {
    if (message) {
        resolve([
            { username: "Aminur", email: "aminurhstu23@gmail.com" },
            { username: "Amin", email: "aminurapbn20@gmail.com" }
        ]);
    } else {
        reject("user is not valid");
    }
});

myPromise.then((s) => {
    console.log(s);
}).catch((error) => {
    console.log(error);
});
