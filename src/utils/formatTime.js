const formatTime = timeString => {
  const date = new Date(timeString);
  return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
};

export default formatTime;
