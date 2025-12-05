const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    console.log("File Content:");
    console.log(data);
});

try {
    const data = fs.readFileSync("info.txt", "utf8");
    console.log("Synchronous File Content:");
    console.log(data);
} catch (err) {
    console.log("Error:", err);
}

fs.writeFile("output.txt", "Hello, this is written content!", (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }
    console.log("File written successfully!");
});

fs.appendFile("output.txt", "\nThis is appended text.", (err) => {
    if (err) {
        console.log("Error appending:", err);
        return;
    }
    console.log("Text appended successfully!");
}); 

const fs = require("fs");

fs.unlink("temp.txt", (err) => {
    if (err) {
        console.log("Error deleting file:", err);
        return;
    }
    console.log("temp.txt deleted successfully!");
});

fs.mkdir("my-data", (err) => {
    if (err) {
        if (err.code === "EEXIST") {
            console.log("Folder already exists!");
        } else {
            console.log("Error creating folder:", err);
        }
        return;
    }
    console.log("Folder 'my-data' created successfully!");
});

fs.readdir("documents", (err, files) => {
    if (err) {
        console.log("Error reading directory:", err);
        return;
    }

    console.log("Files in documents/:");
    files.forEach(file => {
        console.log(file);
    });
});

fs.copyFile("source.txt", "backup.txt", (err) => {
    if (err) {
        console.log("Error copying file:", err);
        return;
    }
    console.log("File copied successfully!");
});

if (fs.existsSync("config.json")) {
    console.log("config.json exists.");
} else {
    console.log("config.json does NOT exist.");
}

fs.watch("watchme.txt", () => {
    console.log("File Changed");
});

console.log("Watching file... (edit watchme.txt to see output)");