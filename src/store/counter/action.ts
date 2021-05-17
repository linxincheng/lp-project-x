export const add = () => ({ type: "add" });
export const set = (counter: number) => ({
  type: "set",
  preload: counter,
});
