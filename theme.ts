'use client';
/* 
import { createTheme } from '@mantine/core';

export const theme = createTheme({
});
 */
import { MantineColorsTuple, createTheme, virtualColor } from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#eafaed",
  "#ddeee0",
  "#bfdbc2",
  "#9dc6a2",
  "#81b487",
  "#6ea975",
  "#64a46c",
  "#528f5a",
  "#477f4f",
  "#386f40"
];

const myRed: MantineColorsTuple = [
  "#ffeaf3",
  "#fdd4e1",
  "#f4a7bf",
  "#ec779c",
  "#e64f7e",
  "#e3356b",
  "#e22762",
  "#c91a52",
  "#b41149",
  "#9f003e"
];

const myLight: MantineColorsTuple = [
  "#edf9ed",
  "#e0ede2",
  "#c3d7c5",
  "#a3c0a7",
  "#88ad8d",
  "#77a17c",
  "#6d9b73",
  "#5b8760",
  "#4f7954",
  "#3f6945"
];

const myDark: MantineColorsTuple = [
  "#eafaed",
  "#ddeee0",
  "#bfdbc2",
  "#9dc6a2",
  "#81b487",
  "#6ea975",
  "#64a46c",
  "#528f5a",
  "#477f4f",
  "#386f40"
];
/* 
export const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: "myColor",
  defaultRadius: 15,
});
 */

export const theme = createTheme({
  colors: {
    myRed,
    myDark,
    myLight,
    myPrimary: virtualColor({
      name: 'myPrimary',
      dark: 'myDark',
      light: 'myLight',
    }),
  },
  primaryColor: "myPrimary",
  defaultRadius: 15,
});

