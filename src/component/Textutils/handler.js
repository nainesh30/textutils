class Handler {
  handlelow({ text }, { setText }) {
    const newtext = text.toLowerCase();
    setText(newtext);
    
  }
  handleup({ text }, { setText }) {
    const newtext = text.toUpperCase();
    setText(newtext);
  }
  handleclear({ text }, { setText }) {
    setText('');
  }
}
export default  new Handler();
