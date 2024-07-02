function hexToRgb(hex: string): [number, number, number] {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  return [r, g, b];
}

function linTransform(c: number): number {
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function rgbToLuminance([r, g, b]: [number, number, number]): number {
  return (
    0.2126 * linTransform(r) +
    0.7152 * linTransform(g) +
    0.0722 * linTransform(b)
  );
}

function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex);
  return rgbToLuminance([r, g, b]);
}

function contrastRatio(hex1: string, hex2: string): number {
  let L1 = relativeLuminance(hex1) + 0.05;
  let L2 = relativeLuminance(hex2) + 0.05;
  return L1 > L2 ? L1 / L2 : L2 / L1;
}

// Exemple d'utilisation
const color1 = "#FFFFFF";
const color2 = "#F2F2F2";
console.log("Contrast Ratio:", contrastRatio(color1, color2));
