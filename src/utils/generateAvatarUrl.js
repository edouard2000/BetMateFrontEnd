const generateAvatarUrl = name => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name,
  )}&background=random&size=128`;
};

export default generateAvatarUrl;
