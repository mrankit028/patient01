# Jarurat Care - Patient Records Dashboard

A modern, responsive React application for managing patient records with a sleek and intuitive interface.

## Features

- **Landing Page**: Welcome page with navigation and branding
- **Patient Records Management**:
  - Fetch patient data from JSON Placeholder API
  - Responsive card-based layout
  - Search functionality by patient name
  - Detailed patient view in modal
  - Add new patients locally
- **State Management**: React Hooks for efficient state handling
- **Responsive Design**: Optimized for desktop and mobile devices
- **Animations**: Smooth transitions and hover effects using Framer Motion
- **Loading & Error States**: User-friendly feedback during data fetching

## Technologies Used

- **React**: Frontend framework
- **Vite**: Build tool and development server
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **Framer Motion**: Animation library
- **CSS3**: Styling with modern features

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd jcare
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5174`

## Project Structure

```
src/
├── components/
│   ├── Header.jsx & Header.css
│   ├── Home.jsx & Home.css
│   ├── Patients.jsx & Patients.css
│   ├── PatientCard.jsx & PatientCard.css
│   ├── PatientModal.jsx & PatientModal.css
│   ├── AddPatientForm.jsx & AddPatientForm.css
│   └── About.jsx & About.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## API Usage

The application uses the [JSON Placeholder](https://jsonplaceholder.typicode.com/users) API to fetch mock patient data. Each user object is mapped to include:
- Name
- Age (randomly generated)
- Contact (email)
- Additional details like address and company

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to Netlify

## Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Patients Page
![Patients Page](screenshots/patients.png)

### Patient Details Modal
![Patient Modal](screenshots/modal.png)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please reach out to the development team.
