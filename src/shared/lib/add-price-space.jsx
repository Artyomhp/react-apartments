export const formatNumber = (price) => {
  return price.toLocaleString("ru-RU", {
    style: "decimal",
    useGrouping: true,
  });
};
