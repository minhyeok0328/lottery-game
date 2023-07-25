export function numberFormat(value: number): string {
  return Intl.NumberFormat().format(value);
}

