/** A calendar year and month in the MM-YYYY format. */
declare const monthYearBrand: unique symbol;
declare const yearBrand: unique symbol;

export type Year = number & {
  readonly [yearBrand]: true;
};

export type MonthYear = string & {
  readonly [monthYearBrand]: true;
};
