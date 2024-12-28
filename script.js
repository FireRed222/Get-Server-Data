let container = document.querySelector(".container");

let getData = async () => {
   let response = await fetch("https://dummyjson.com/users");
   let data = await response.json();

   data.users.map((user) => {
      container.innerHTML += `<div class="card">
      <h2>${user.firstName} ${user.lastName}</h2>
      <p>age: ${user.age}</p>
      <p>email: ${user.email}</p>
      <p>password: ${user.password}</p>
      <img src="${user.image}" alt="">
      </div>`;
   });
};

getData();