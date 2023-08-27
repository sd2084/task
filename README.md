# ATTENDANCE SYSTEM:
Leveraging the power and reactivity of the *React framework*, this Attendance Management System offers a seamless experience for tracking attendance data. With an emphasis on real-time updates, any data entered through our intuitive form immediately reflects in the attendance table, providing users with  dynamic user interface.

**The live version of the project is deployed:**  https://sd2084.github.io/task/

**Features:**

*Input Form:* A form to collect attendance data such as:
1. Student Name  -
2. Roll Number
3. Date (in the format dd/mm/yyyy)
4. Subject
5. Attendance Status (Present/Absent)

*Attendance Table:* A table displaying the recorded attendance data.

**Key Features:**

*React-Powered Dynamics:*
1. Reactivity: Harnessing React's state management, the application ensures immediate updates, showcasing the dynamic nature of single-page applications.
2. Component Design: The system is broken down into reusable components, such as the AttendanceForm and AttendanceTable, promoting clean and modular code.

**Implementation Details:**

*AttendanceForm Component:*
Provides input fields for name, regNo, date, subject, and status.
Ensures data format, especially the date in dd/mm/yyyy format.
On submission, it invokes a callback to pass the form data to the main App component.

*AttendanceTable Component:*
Displays attendance data in a neat table.
Each row represents a student's attendance data.

*Main App Component:*
Manages the overall layout and state of the application.
Renders the input form and the table side by side.


**Here's a preview of the application:**

<img width="947" alt="image" src="https://web.whatsapp.com/9f356812-c433-4d21-bf1c-32d718f1d7cc">


**Prerequisites:**
1. Make sure you have Node.js installed on your machine.
2. Visual Studio Code should be installed.
3. Git should be set up on your computer. 

**Step-by-Step Guide:**
1. Clone the repository in command prompt: git clone https://github.com/sd2084/task.git
2. Move into the project directory in vs code: cd task
3. Install the required dependencies: npm install
4. Launch the application: npm start

Access the application in your browser at http://localhost:3000.


