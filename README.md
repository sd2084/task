# ATTENDANCE SYSTEM:
Leveraging the power and reactivity of the React framework, this Attendance Management System offers a seamless experience for tracking attendance data. With an emphasis on real-time updates, any data entered through our intuitive form immediately reflects in the attendance table, providing users with  dynamic user interface.


**Features:**

Input Form: A form to collect attendance data such as:
-Student Name  -Registration Number
-Date (in the format dd/mm/yyyy)
-Subject
-Attendance Status (Present/Absent)

Attendance Table: A table displaying the recorded attendance data.

**Key Features:**

React-Powered Dynamics:
-Reactivity: Harnessing React's state management, the application ensures immediate updates, showcasing the dynamic nature of single-page applications.
-Component Design: The system is broken down into reusable components, such as the AttendanceForm and AttendanceTable, promoting clean and modular code.

**Implementation Details:**

AttendanceForm Component:
Provides input fields for name, regNo, date, subject, and status.
Ensures data format, especially the date in dd/mm/yyyy format.
On submission, it invokes a callback to pass the form data to the main App component.

AttendanceTable Component:
Displays attendance data in a neat table.
Each row represents a student's attendance data.

Main App Component:
Manages the overall layout and state of the application.
Renders the input form and the table side by side.

**Here's a preview of the application:**

<img width="947" alt="image" src="https://github.com/sd2084/task/assets/131029535/fb20108e-7b22-4189-977d-beaeb5153e99">

**Getting Started in Visual Studio Code:**
1. Clone the repository: git clone [repository-url]
2. Move into the project directory: cd [repository-directory]
3. Install the required dependencies: npm install
4. Launch the application: npm start

Or access the application in your browser at http://localhost:3000.


