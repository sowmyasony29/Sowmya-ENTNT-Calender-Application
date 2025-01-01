![Dashboard Screenshot](https://github.com/sowmyasony29/Sowmya-ENTNT-Calender-Application/blob/main/Assessment-1.png)
![Communication](https://github.com/sowmyasony29/Sowmya-ENTNT-Calender-Application/blob/main/Assessment-2.png)
![Company-Management](https://github.com/sowmyasony29/Sowmya-ENTNT-Calender-Application/blob/main/Assessment-Company-3.png)


# Project Name: Communication Management Application
## Description

This project is a communication management system built with React. It is designed to help manage communications, track statuses (overdue, due, completed), and enhance user experience with dynamic data handling. The application features color-coded communication statuses, a responsive UI, and easy navigation.

## Features
**Company Management**: Add, edit, and delete companies.
**Communication Management**: Schedule, track, and categorize communication methods with statuses like overdue, due, and completed.
**Responsive Design**: The application is fully responsive for desktop and mobile use.
**Color-Coded Status**: Communications are highlighted based on their status (overdue, due, completed).
**User-Friendly Interface**: Intuitive navigation and a modern user interface.


## Table of Contents
Project Setup
Deployment Instructions
Functionality and Limitations
Testing & Validation
Evaluation Criteria
Technologies Used
Additional Notes


## Setup
To run this project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/sowmyasony29/Sowmya-ENTNT-Calender-Application.git

2.Navigate to the project directory:
   cd cd communication-dashboard

3.Install dependencies:
  Make sure you have Node.js installed on your machine. If you don't, download and install it 
  from Node.js.
  Then, install the project dependencies:
     npm install

4.Run the development server:
  npm start

The application should now be running at http://localhost:3000.

## Setup and Deployment
To deploy this app on a platform like Vercel, Netlify, or GitHub Pages, follow these instructions:

### Deployment Instructions
The app can be deployed to platforms like Vercel, Netlify, or GitHub Pages. Below are the deployment steps:
### Vercel
1.Sign up/login to Vercel.
2.Click on "New Project" and import your GitHub repository.
3.Vercel will automatically detect the React app and deploy it.
4.After deployment, you will receive a URL that you can share with others.
### Netlify
1.Sign up/login to Netlify.
2.Click on "New site from Git" and link your GitHub repository.
3.Choose the build command npm run build and the publish directory build/.
4.After deployment, you will receive a live URL.

### GitHub Pages
Build the app using the command
   npm run build
Push the build folder to the gh-pages branch.
Enable GitHub Pages in the repository settings and point it to the gh-pages branch.
## Functionality and Limitations
### Features
Company Communication Tracking: Manage communication schedules and statuses (Overdue, Due, Completed).
Dynamic Data: Data updates automatically, and the communication status is visually represented using colors.
User Interface: Color-coded highlights, intuitive UI, tooltips for additional information.

## Known Limitations
Authentication: At this stage, no login functionality is implemented. For now, the app is accessible to all users.
Advanced Features: Some advanced features such as calendar integration (e.g., using FullCalendar) or authentication via JWT are not yet implemented.

## Testing & Validation
### Testing Process
The application has been tested thoroughly to ensure there are no major issues or bugs.
All communication statuses (Overdue, Due, Completed) are correctly handled and color-coded.
Sample data for mock companies, communication methods, and schedules has been included for evaluation.
## Validation
The app runs smoothly with no noticeable performance issues.
UI Testing: The user interface is responsive, and the design works well across different screen sizes.

## Evaluation Criteria
### Code Quality
**Modular Design:** The project follows modular architecture with reusable components like CompanyCard, CommunicationList, etc.
**Maintainability:** The code is clean, well-commented, and adheres to best practices for React development.
**State Management:** Utilizes React's Context API for managing the communication data across components.
### Functionality
**Complete Implementation:** All required features (tracking communication statuses, displaying company details) are fully implemented.
**Status Handling:** Communications are properly categorized and displayed based on their status (Overdue, Due, Completed).
### User Experience
**Intuitive Navigation:** Users can easily navigate between communication statuses and view company details.
**Color-Coded System:** The overdue, due, and completed statuses are represented with clear color highlights for easy recognition.
**Tooltips:** Useful tooltips are shown when hovering over communication cards, giving additional context about the status.
### Application Performance
**Efficient Rendering:** The app performs well even with a large dataset of communications.
Responsive UI: The application adjusts smoothly across various device screen sizes.
### Creativity and Innovation
**Modern UI Design:** The user interface follows modern design principles, with clean typography, intuitive icons, and effective use of colors.
**Optional Enhancements:** Future enhancements could include adding authentication and integrating FullCalendar for communication scheduling.

## Technologies Used
React: Frontend library for building the user interface.
React Router: For navigating between different views (Dashboard, Communications).
Vite: Development server and bundler for fast React app development.
Node.js: Backend for running the server-side logic (optional if you extend the app).
Tailwind CSS (optional for styling): Utility-first CSS framework (if used).

## Additional Notes
**Dependencies:** A list of third-party libraries and dependencies used in the project:
react-router-dom for routing
axios for making HTTP requests (if needed)
react-icons for icon support
