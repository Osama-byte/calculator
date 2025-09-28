// Global variable
let APP_NAME = "Grade Calculator";

// Event listener instead of inline onclick
document.getElementById("calcBtn").addEventListener("click", calculate);

function calculate() {
    let out = document.getElementById("output");
    out.textContent = "App: " + APP_NAME + "\n";

    let marksInput = document.getElementById("marks").value.trim();

    if (marksInput === "") {
        out.textContent += "⚠ Please enter marks.\n";
        return;
    }

    let marksArray = marksInput.split(",");
    let validMarks = [];
    let total = 0;

    for (let i = 0; i < marksArray.length; i++) {
        let mark = marksArray[i].trim();
        try {
            let num = Number(mark);
            if (isNaN(num)) {
                throw new Error(`${mark} is not a valid number`);
            }
            validMarks.push(num);
            total += num;
            out.textContent += `Mark ${ i + 1 }: ${ num } \n`;
        } catch (err) {
            out.textContent += `Error: ${ err.message } \n`;
        }
    }

    if (validMarks.length > 0) {
        let avg = total / validMarks.length;
        out.textContent += `Total: ${ total } \nAverage: ${ avg.toFixed(2) } \n`;

        let grade;
        if (avg >= 90) grade = "A+";
        else if (avg >= 75) grade = "A";
        else if (avg >= 60) grade = "B";
        else if (avg >= 40) grade = "C";
        else grade = "F";

        out.textContent += `Grade: ${ grade } \n`;
    } else {
        out.textContent += "⚠ No valid marks entered.\n";
    }
}
