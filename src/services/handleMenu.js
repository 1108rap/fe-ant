const handleMenuClick = (navigate) => (e) => {
  const path = e.item.props.path;
  if (path) {
    navigate(path);
  } else {
    console.error("Path not found");
  }
};

export default handleMenuClick;
