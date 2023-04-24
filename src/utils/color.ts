import { colord } from "colord";

export const defaultColors = ["#ED4747", "#F3C900", "#1FAD5F"];

export const defaultBoolColors = ["#ED4747", "#1FAD5F"];

export const defaultToggleButtonColor = ["#ED4747"];

export const resultColorsScale = (
  value: number,
  colors: any = defaultColors,
  defaultColor: string = "#fff"
) =>
  value <= 0.5
    ? colord(colors[0] || defaultColor).mix(
        colors[1] || defaultColor,
        value * 2
      )
    : colord(colors[1] || defaultColor).mix(
        colors[2] || defaultColor,
        (value - 0.5) * 2
      );

export const resultBoolColorsScale = (
  value: number,
  colors: any = defaultBoolColors,
  defaultColor: string = "#fff"
) =>
  value <= 0.5
    ? colord(colors[0] || defaultColor).mix(
        colors[0] || defaultColor,
        value * 2
      )
    : colord(colors[0] || defaultColor).mix(
        colors[0] || defaultColor,
        (value - 0.5) * 2
      );

export const resultBoolColorsScale2 = (
  value: number,
  colors: any = defaultBoolColors,
  defaultColor: string = "#fff"
) =>
  value <= 0.5
    ? colord(colors[0] || defaultColor).mix(
        colors[1] || defaultColor,
        value * 2
      )
    : colord(colors[1] || defaultColor).mix(
        colors[1] || defaultColor,
        (value - 0.5) * 2
      );
