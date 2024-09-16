var _a, _b, _c;
// Get the resume container
var resumeContainer = document.getElementById("resumeContainer");
// Add an event listener to make sections editable
resumeContainer === null || resumeContainer === void 0 ? void 0 : resumeContainer.addEventListener("click", function (event) {
    var target = event.target;
    // Only toggle editable mode if the clicked element is part of the resume
    if (target.classList.contains("editable")) {
        target.contentEditable = "true";
        target.focus();
        // When user clicks out of the editable area, save changes
        target.addEventListener("blur", function () {
            target.contentEditable = "false";
            // Additional logic to handle saving the updated content, if needed.
        });
    }
});
// Function to generate a unique URL based on the name
function generateUniqueURL(name) {
    var baseURL = "https://milestone5-unique-path-and-shareable-link-six.vercel.app/";
    return "".concat(baseURL);
}
// Function to generate the resume dynamically based on form inputs
function generateResume() {
    var name = document.getElementById("name");
    var dob = document.getElementById("dob");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var degree = document.getElementById("degree");
    var institution = document.getElementById("institution");
    var year = document.getElementById("year");
    var company = document.getElementById("company");
    var position = document.getElementById("position");
    var duration = document.getElementById("duration");
    var skills = document.getElementById("skills");
    var resumeHTML = "\n    <h2 class=\"editable\">Personal Information</h2>\n    <p class=\"editable\"><strong>Full Name:</strong> ".concat(name.value, "</p>\n    <p class=\"editable\"><strong>Date of Birth:</strong> ").concat(dob.value, "</p>\n    <p class=\"editable\"><strong>Email:</strong> ").concat(email.value, "</p>\n    <p class=\"editable\"><strong>Phone:</strong> ").concat(phone.value, "</p>\n    <br/>\n    \n    <h2 class=\"editable\">Education</h2>\n    <p class=\"editable\"><strong>Degree:</strong> ").concat(degree.value, "</p>\n    <p class=\"editable\"><strong>Institution:</strong> ").concat(institution.value, "</p>\n    <p class=\"editable\"><strong>Year:</strong> ").concat(year.value, "</p>\n    <br/>\n\n    <h2 class=\"editable\">Work Experience</h2>\n    <p class=\"editable\"><strong>Company:</strong> ").concat(company.value, "</p>\n    <p class=\"editable\"><strong>Position:</strong> ").concat(position.value, "</p>\n    <p class=\"editable\"><strong>Duration:</strong> ").concat(duration.value, "</p>\n    <br/>\n\n    <h2 class=\"editable\">Skills</h2>\n    <p class=\"editable\"><strong>Skills:</strong> ").concat(skills.value, "</p>\n  ");
    // Update the resume container with the generated resume
    resumeContainer.innerHTML = resumeHTML;
    // Generate and display the unique URL
    var resumeURL = generateUniqueURL(name.value);
    alert("Your resume URL is: ".concat(resumeURL));
}
// Function to print only the resume content with CSS styling
function printResume() {
    var _a;
    var resumeContent = (_a = document.getElementById("resumeContainer")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    if (resumeContent) {
        var printWindow = window.open("", "", "height=600,width=800");
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write("\n      <html>\n        <head>\n          <title>Print Resume</title>\n          <style>\n            body, .resume-container {\n              font-family: Arial, sans-serif;\n              background-color: whitesmoke;\n              margin: 8px;\n            }\n            h1 {\n              color: #6a5acd;\n              margin: 0;\n              font-size: 40px;\n              padding: 10px;\n              margin-top: 20px;\n              margin-bottom: 5px;\n            }\n            p {\n              margin-top: 0%;\n              font-size: 20px;\n              margin-bottom: 15px;\n            }\n            .resume-container {\n              width: 850px;\n              margin: auto;\n              background-color: white;\n              border-radius: 15px;\n              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);\n              padding: 30px;\n              margin-bottom: 50px;\n            }\n            h2 {\n              color: white;\n              background-color: #6a5acd;\n              border-radius: 5px;\n              padding: 15px;\n            }\n            p.editable {\n              font-size: 19px;\n            }\n            .editable {\n              border: 1px dashed #6a5acd;\n              padding: 5px;\n            }\n          </style>\n        </head>\n        <body>\n          ".concat(resumeContent, "\n        </body>\n      </html>\n    "));
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.close(); // Close the document for processing
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.focus(); // Bring the print window into focus
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.print(); // Trigger the print dialog
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.close(); // Close the window after printing
    }
    else {
        alert("No resume content to print.");
    }
}
// Function to share the resume link
function shareResume() {
    var name = document.getElementById("name");
    var resumeURL = generateUniqueURL(name.value);
    // Use Web Share API if available, otherwise fallback to copying the link
    if (navigator.share) {
        navigator
            .share({
            title: "My Resume",
            text: "Check out my resume!",
            url: resumeURL,
        })
            .then(function () { return console.log("Resume shared successfully"); })
            .catch(function (error) { return console.error("Error sharing resume", error); });
    }
    else {
        navigator.clipboard.writeText(resumeURL).then(function () {
            alert("Resume URL copied to clipboard: " + resumeURL);
        });
    }
}
// Listen for form submission
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    generateResume();
});
// Print resume button listener
(_b = document.getElementById("download")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", printResume);
// Share resume button listener
(_c = document.getElementById("share")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", shareResume);
