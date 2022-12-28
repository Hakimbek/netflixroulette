export const getRuntime = (time: number) => {
  const hours = Math.floor(time / 60);
  return `${hours}h ${time - hours * 60}m`;
};
