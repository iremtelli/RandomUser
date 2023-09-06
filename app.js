let userList
const userContainer = document.querySelector(".user-container")
const btn = document.querySelector(".btn-container")
const getUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=10")
  userList = await response.json()
  userList = userList.results

  userList.map((user) => {
    creatlist(user)
  })
}
getUsers()

const creatlist = (user) => {
  const listItem = document.createElement("li")
  listItem.innerHTML = ` <li>
    <img
      src="${user.picture.medium}"
      alt=""
    />
    <div class="info-container">
      <p>${user.name.first}  ${user.name.last}</p>
      <p><i class="fa-solid fa-envelope"> ${user.email}</i></p>
      <p><i class="fa-solid fa-phone"> ${user.phone}</i></p>
      <p>${user.location.city}
    </div>
  </li>`
  userContainer.appendChild(listItem)
}
btn.addEventListener("click", () => {
  userContainer.innerHTML = ""
  getUsers()
})
