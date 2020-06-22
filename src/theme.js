import { createMuiTheme } from "@material-ui/core/styles";
import { red, purple } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0277bd"
    },
    secondary: {
      main: "#d33f8d"
    },
    fancy: {
      main: "#6a11cb"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    },
    create: {
      main: purple
    }
  }
});

export default theme;
