import "styled-components"

export const Theme = {
  colors: {
    background: "#333",
    card: "#444",
    primary: "#cfbc7d",
    primaryHover: "#998B5C",
    feedback: {
      error: "#cc0000",
      warning: "#ff8800",
      success: "#007e33",
      info: "#0d47a1"
    },
    others: {
      exit: "#cc2929",
      exitHover: "#991F1F",
      lineOne: "#595959",
      lineTwo: "#262626"
    }
  },

  font: {
    colors: {
      title: "#f2f2f2",
      text1: "#e6e6e6",
      text2: "#d9d9d9",
      inputField: "#808080",
      primaryText: "#cfbc7d",
      ButtonText: "#444"
    },
    size: {
      main: {
        xxl: "96px",
        xl: "64px",
        l: "50px",
        m: "36px",
        s: "30px",
        xs: "24px",
        xxs: "20px"
      },
      side: {
        l: "40px",
        m: "25px"
      }
    }
  },

  transition: {
    time: "0.3s",
    type: "ease"
  },

  shadow: {
    button: "0 4px 0 0 #332B0F"
  }
}
