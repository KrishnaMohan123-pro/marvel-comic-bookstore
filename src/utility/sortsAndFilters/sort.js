const characterSortOptions = [
  { name: "Name", value: "name" },
  { name: "Modified", value: "modified" },
  { name: "Name DESC", value: "-name" },
  { name: "Modified DESC", value: "-modified" },
];
const comicsSortOptions = [
  { name: "Title", value: "title" },
  { name: "Modified", value: "modified" },
  { name: "On Sale Date", value: "onsaleDate" },
  { name: "Title DESC", value: "-title" },
  { name: "Modified DESC", value: "-modified" },
  { name: "On Sale Date DESC", value: "-onsaleDate" },
];
const seriesSortOptions = [
  { name: "Title", value: "title" },
  { name: "Modified", value: "modified" },
  { name: "Start Year", value: "startYear" },
  { name: "Title DESC", value: "-title" },
  { name: "Modified DESC", value: "-modified" },
  { name: "Start Year DESC", value: "-startYear" },
];
export { seriesSortOptions, comicsSortOptions, characterSortOptions };
