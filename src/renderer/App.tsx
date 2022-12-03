import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
import { Alert } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import icon from '../../assets/icon.svg';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const Hello = () => {
  return (
    <div>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
