export const convertToSlug = (title) => {
  const lowercaseTitle = title.toLowerCase();
  const slug = lowercaseTitle.replace(/\s+/g, '-');
  return slug;
};
