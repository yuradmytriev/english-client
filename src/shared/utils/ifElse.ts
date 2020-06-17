export const ifElse = (
  predicate: boolean,
  right: any,
  left: any,
): boolean | any => (predicate ? right : left);
