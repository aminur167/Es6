// async/await with fetch example

// simulate API call
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = {
                1: { name: "Aminur", role: "Developer" },
                2: { name: "Rakib", role: "Designer" },
                3: { name: "Sumon", role: "Tester" }
            };
            if (users[id]) resolve(users[id]);
            else reject(new Error("User not found"));
        }, 1000);
    });
}

// using promise .then()
console.log("--- Promise chain ---");
fetchUser(1)
    .then(user => console.log("Found:", user.name, "-", user.role))
    .catch(err => console.log("Error:", err.message));

// using async/await
async function getUser(id) {
    try {
        const user = await fetchUser(id);
        console.log("Async found:", user.name, "-", user.role);
    } catch (err) {
        console.log("Async error:", err.message);
    }
}

// call multiple async operations
async function getAllUsers() {
    console.log("\n--- All users ---");
    const results = await Promise.all([
        fetchUser(1),
        fetchUser(2),
        fetchUser(3)
    ]);
    results.forEach(u => console.log(" ", u.name, "-", u.role));
}

getUser(2);
getAllUsers();
