const openSide = () => {
    document.getElementById("sideBar").style.width="150px"


}
const closeSide = () => {
    document.getElementById("sideBar").style.width="0"
    document.querySelector(".dropdown").style.display = "none"
}