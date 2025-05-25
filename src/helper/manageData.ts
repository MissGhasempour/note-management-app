export default function manageData ( comment : string) {
    localStorage.setItem('comment', comment);
    localStorage.getItem("comment");
}