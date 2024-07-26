const formatTime = timeString => {
  const date = new Date(timeString);
  return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
};

const formatDate = timeString => {
  const date = new Date(timeString);
  return date.toLocaleDateString();
};

export { formatTime, formatDate };
