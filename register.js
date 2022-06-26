const save = () => {
  const userNameInput = document.querySelector("#username").value;
  const userIdInput = document.querySelector("#userid").value;
  const passwordInput = document.querySelector("#password").value;
  const password2Input = document.querySelector("#password2").value;

  console.log("button click", userIdInput);

  const data = {
    userid: userIdInput,
    username: userNameInput,
    password: passwordInput,
    password2: password2Input,
  };
  console.log(data);

  // json stringify untuk mengubah data js object menjadi json
  const dataJSON = JSON.stringify(data);
  console.log(dataJSON);

  localStorage.setItem("data", dataJSON);
  alert("Apakah data anda sudah benar ?");
  window.location.replace("./loginPage.html");

  localStorage.setItem("userid", userIdInput);
  localStorage.setItem("username", userNameInput);
  localStorage.setItem("password", passwordInput);
  localStorage.setItem("password2", password2Input);
};

const get = () => {
  const dataJSON = localStorage.getItem("data");
  console.log(dataJSON);

  // json parse untuk mengubah data json menjadi js object
  const data = JSON.parse(dataJSON);
  console.log(data);
};

function Login() {
  // ambil value input dari user
  const useridInput = document.querySelector("#userid").value;
  const passwordInput = document.querySelector("#password").value;

  console.log(useridInput, passwordInput);

  // ambil data dari localStorage
  const dataLocal = localStorage.getItem("data");
  const dataParse = JSON.parse(dataLocal);

  console.log(dataParse);
alert("Selamat Datang");
  window.location.replace("./kategoritiket.html");
  // kondisi persamaan input user dengan data di localStorage

//   if (useridInput === dataParse.userIdInput && passwordInput === dataParse.password) {
//     console.log("ID dan password sama");
//     alert("Selamat Datang");
//     window.location.replace("./kategoritiket.html");
//   } else {
//     console.log("ID atau password ada yang salah");
//     alert("ID atau password ada yang salah");
//     document.querySelector("#userid").value = "";
//     document.querySelector("#password").value = "";
//   }
}
