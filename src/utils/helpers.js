export const timeAgo = (time) => {
  return new Date(time * 1000).toLocaleDateString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });
};
