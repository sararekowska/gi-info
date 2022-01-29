export const sub = (name: string, arr: string[], rep: string) =>
  arr.reduce((acc, el) => acc.replaceAll(el, rep), name.toLowerCase());
