// Get the resume container
const resumeContainer = document.getElementById("resumeContainer");

// Add an event listener to make sections editable
resumeContainer?.addEventListener("click", function (event) {
  const target = event.target as HTMLElement;

  // Only toggle editable mode if the clicked element is part of the resume
  if (target.classList.contains("editable")) {
    target.contentEditable = "true";
    target.focus();

    // When user clicks out of the editable area, save changes
    target.addEventListener("blur", () => {
      target.contentEditable = "false";
      // Additional logic to handle saving the updated content, if needed.
    });
  }
});

// Function to generate a unique URL based on the name
function generateUniqueURL(name: string): string {
  const baseURL = "https://username.vercel.app/resume";
  return `${baseURL}`;
}

// Function to generate the resume dynamically based on form inputs
function generateResume() {
  const name = document.getElementById("name") as HTMLInputElement;
  const dob = document.getElementById("dob") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const phone = document.getElementById("phone") as HTMLInputElement;
  const degree = document.getElementById("degree") as HTMLInputElement;
  const institution = document.getElementById(
    "institution"
  ) as HTMLInputElement;
  const year = document.getElementById("year") as HTMLInputElement;
  const company = document.getElementById("company") as HTMLInputElement;
  const position = document.getElementById("position") as HTMLInputElement;
  const duration = document.getElementById("duration") as HTMLInputElement;
  const skills = document.getElementById("skills") as HTMLInputElement;

  const resumeHTML = `
    <h2 class="editable">Personal Information</h2>
    <p class="editable"><strong>Full Name:</strong> ${name.value}</p>
    <p class="editable"><strong>Date of Birth:</strong> ${dob.value}</p>
    <p class="editable"><strong>Email:</strong> ${email.value}</p>
    <p class="editable"><strong>Phone:</strong> ${phone.value}</p>
    <br/>
    
    <h2 class="editable">Education</h2>
    <p class="editable"><strong>Degree:</strong> ${degree.value}</p>
    <p class="editable"><strong>Institution:</strong> ${institution.value}</p>
    <p class="editable"><strong>Year:</strong> ${year.value}</p>
    <br/>

    <h2 class="editable">Work Experience</h2>
    <p class="editable"><strong>Company:</strong> ${company.value}</p>
    <p class="editable"><strong>Position:</strong> ${position.value}</p>
    <p class="editable"><strong>Duration:</strong> ${duration.value}</p>
    <br/>

    <h2 class="editable">Skills</h2>
    <p class="editable"><strong>Skills:</strong> ${skills.value}</p>
  `;

  // Update the resume container with the generated resume
  resumeContainer!.innerHTML = resumeHTML;

  // Generate and display the unique URL
  const resumeURL = generateUniqueURL(name.value);
  alert(`Your resume URL is: ${resumeURL}`);
}

// Function to print only the resume content with CSS styling
function printResume() {
  const resumeContent = document.getElementById("resumeContainer")?.innerHTML;

  if (resumeContent) {
    const printWindow = window.open("", "", "height=600,width=800");

    printWindow?.document.write(`
      <html>
        <head>
          <title>Print Resume</title>
          <style>
            body, .resume-container {
              font-family: Arial, sans-serif;
              background-color: whitesmoke;
              margin: 8px;
            }
            h1 {
              color: #6a5acd;
              margin: 0;
              font-size: 40px;
              padding: 10px;
              margin-top: 20px;
              margin-bottom: 5px;
            }
            p {
              margin-top: 0%;
              font-size: 20px;
              margin-bottom: 15px;
            }
            .resume-container {
              width: 850px;
              margin: auto;
              background-color: white;
              border-radius: 15px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
              padding: 30px;
              margin-bottom: 50px;
            }
            h2 {
              color: white;
              background-color: #6a5acd;
              border-radius: 5px;
              padding: 15px;
            }
            p.editable {
              font-size: 19px;
            }
            .editable {
              border: 1px dashed #6a5acd;
              padding: 5px;
            }
          </style>
        </head>
        <body>
          ${resumeContent}
        </body>
      </html>
    `);

    printWindow?.document.close(); // Close the document for processing
    printWindow?.focus(); // Bring the print window into focus
    printWindow?.print(); // Trigger the print dialog
    printWindow?.close(); // Close the window after printing
  } else {
    alert("No resume content to print.");
  }
}

// Function to share the resume link
function shareResume() {
  const name = document.getElementById("name") as HTMLInputElement;
  const resumeURL = generateUniqueURL(name.value);

  // Use Web Share API if available, otherwise fallback to copying the link
  if (navigator.share) {
    navigator
      .share({
        title: "My Resume",
        text: "Check out my resume!",
        url: resumeURL,
      })
      .then(() => console.log("Resume shared successfully"))
      .catch((error) => console.error("Error sharing resume", error));
  } else {
    navigator.clipboard.writeText(resumeURL).then(() => {
      alert("Resume URL copied to clipboard: " + resumeURL);
    });
  }
}

// Listen for form submission
document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    generateResume();
  });

// Print resume button listener
document.getElementById("download")?.addEventListener("click", printResume);

// Share resume button listener
document.getElementById("share")?.addEventListener("click", shareResume);
