import type { MonthYear, Year } from "../types/date";

export function parseMonthYear(value: string): MonthYear {
  if (!/^(0[1-9]|1[0-2])-\d{4}$/.test(value)) {
    throw new Error(`Invalid month-year format: ${value}`);
  }

  return value as MonthYear;
}

export function formatMonthYear(value: MonthYear): string {
  const [month, year] = value.split("-").map(Number);

  return new Date(year, month - 1).toLocaleDateString("en-AU", {
    month: "short",
    year: "numeric",
  });
}

export function parseYear(value: number): Year {
  if (!Number.isInteger(value) || value < 1000 || value > 9999) {
    throw new Error(`Invalid year: ${value}`);
  }

  return value as Year;
}
