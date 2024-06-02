import data from '../../data.json';

export const convertToSlug = (title) => {
  const lowercaseTitle = title.toLowerCase();
  const slug = lowercaseTitle.replace(/\s+/g, '-');
  return slug;
};

export const getPreviousPageName = (index) => {
  if (index === 0) {
    return '';
  }

  return data[index - 1].name;
};

export const getNextPageName = (index) => {
  if (data.length - index === 1) {
    return '';
  }

  return data[index + 1].name;
};
