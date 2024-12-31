const handleChecked = (setState) => (e) => {
  setState(e.target.checked);
};

export default handleChecked;
