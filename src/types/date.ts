/** A calendar year and month in the MM-YYYY format. */
declare const monthYearBrand: unique symbol;

export type MonthYear = string & {
  readonly [monthYearBrand]: true;
};
