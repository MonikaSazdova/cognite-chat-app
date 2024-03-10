export const adjustTextareaHeight = (e) => {
  const textarea = e.target;
  textarea.style.height = "auto";
  let newHeight = textarea.scrollHeight;
  const singleRowHeight = 20;
  if (newHeight < singleRowHeight) {
    newHeight = singleRowHeight;
  }
  const maxHeight = singleRowHeight * 7;
  if (newHeight > maxHeight) {
    newHeight = maxHeight;
    textarea.style.overflowY = "auto";
  } else {
    textarea.style.overflowY = "hidden";
  }
  textarea.style.height = `${newHeight}px`;
};

export const getTimeDescription = (timestamp) => {
  const now = new Date();
  const date = new Date(timestamp);
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInHours < 24)
    return `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  if (diffInHours < 48) return "yesterday";
  if (diffInHours < 72) return "two days ago";
  if (diffInHours < 96) return "three days ago";
  if (diffInDays < 7) return "few days ago";
  if (diffInWeeks === 1) return "a week ago";
  if (diffInWeeks === 2) return "two weeks ago";
  if (diffInWeeks === 3) return "three weeks ago";
  if (diffInMonths === 1) return "a month ago";
  if (diffInMonths === 2) return "two months ago";
  if (diffInMonths === 3) return "three months ago";
  if (diffInMonths > 3 && diffInMonths < 12) return "few months ago";
  if (diffInYears === 1) return "a year ago";
  if (diffInYears === 2) return "two years ago";
  return "a long time ago";
};

export const setDefaultSelectedContact = (loggedUser, users) => {
  const defaultUserId = loggedUser.contacts[0];
  return users.find((user) => user.userId === defaultUserId);
};

const palette = [
  "#d06c6c",
  "#d35f6e",
  "#d98e47",
  "#c56cb5",
  "#339f91",
  "#339fca",
  "#d1b05f",
  "#c56c95",
  "#d1734f",
  "#c7a938",
  "#72b79b",
  "#3fc9d0",
  "#4f9fd1",
  "#7f6cb8",
  "#6879b7",
  "#768f99",
  "#8cbf99",
  "#cfbe71",
];

export const getColorForUserId = (index) => {
  return palette[index % palette.length];
};
