/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",

        primary10: "#1C3497",
        primary20: "#002C70",
        primary40: "#2E56FC",
        primary60: "#6B8FE0",
        primary80: "#97AAF7",
        primary85: "#AFBEF8",
        primary90: "#C6D1FA",
        primary95: "#DEE4FC",

        secondary10: "#141B2C",
        secondary20: "#293042",
        secondary40: "#575E72",
        secondary60: "#8990A5",
        secondary80: "#C0C6DC",
        secondary95: "#F1F2F5",

        analogous10: "#266066",
        analogous20: "#308392",
        analogous40: "#3597AA",
        analogous60: "#5FCFE6",
        analogous80: "#B6EBF5",
        analogous90: "#E8F5F8",
        analogous95: "#F1F7F7",

        error10: "#410001",
        error20: "#680003",
        error40: "#BA1B1B",
        error60: "#FF5449",
        error80: "#FFB4A9",
        error95: "#FFEDE9",

        warning10: "#898416",
        warning20: "#BCB51F",
        warning40: "#E8E026",
        warning60: "#FFF962",
        warning80: "#FDF999",
        warning95: "#FFFDC6",

        success10: "#045438",
        success20: "#07683C",
        success40: "#0F913D",
        success60: "#3DBD5E",
        success80: "#66DE79",
        success95: "#CEF9CC",

        text20: "#14161A",
        text40: "#575E72",
        text60: "#8891A5",
        text95: "#EEEFF2",

        branding40: "#FBCC08",

        neutral40: "#575E72",

        bgMain: "#F2F3F5",
        bgInput: "#ECF0FF",
        bgFrame: "#FAFAFA",
        bgStatusBar: "#FBCC08",
        borderColor: "#DBDBDB",
        disableColor: "#FAFAFA",

        progressBarBackground: "#ECF0FF",
        progressBarProgress: "#6B8FE0",
      },

      fontSize: {
        baseButton: ["18px", { lineHeight: "24px" }],
        base: ["16px", { lineHeight: "22px" }],
        little: ["12px", { lineHeight: "16px" }],
        midMedium: ["14px", { lineHeight: "18px" }],
        medium: ["16px", { lineHeight: "22px" }],
        large: ["18px", { lineHeight: "24px" }],
        larger: ["20px", { lineHeight: "26px" }],
        big: ["24px", { lineHeight: "30px" }],
        extraBig: ["32px", { lineHeight: "40px" }],
        huge: ["48px", { lineHeight: "56px" }],
      },

      fontWeight: {
        normal: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
      },
    },
  },
  plugins: [],
};
