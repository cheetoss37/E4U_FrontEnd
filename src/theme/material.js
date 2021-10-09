import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Quando",
  },
  overrides: {
    MuiInput: {
      input: {
        "&::placeholder": {
          color: "#9B9B9B",
        },
      },
    },
  },
});

export default theme;
