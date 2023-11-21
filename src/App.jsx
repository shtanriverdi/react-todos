import TodoList from "./TodoList";

import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Cascadia Code',
      'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif',
    ].join(','),
  }
});

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  )
}