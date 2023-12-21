export function decodedValue(colors: string[]): number {
  let value: string = "" ;
  colors.slice(0,2).forEach((element: string) => {
    value += COLORS.indexOf(element);
  });
  return Number(value);
}
const COLORS: string[] = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
