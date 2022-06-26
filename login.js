// function login
const login = () => {
  // ambil value input dari user
  const useridInput = document.querySelector("#userid").value;
  const passwordInput = document.querySelector("#password").value;

  console.log(useridInput, passwordInput);

  // ambil data dari localStorage
  const dataLocal = localStorage.getItem("data");
  const dataParse = JSON.parse(dataLocal);

  console.log(dataParse);

  // kondisi persamaan input user dengan data di localStorage

  // if (useridInput === dataParse.userIdInput && passwordInput === dataParse.password) {
  //   console.log("ID dan password sama");
  //   alert("Login sukses");
  //   window.location.replace("./kategoritiket.html");
  // } else {
  //   console.log("ID atau password ada yang salah");
  //   alert("ID atau password ada yang salah");
  //   document.querySelector("#userid").value = "";
  //   document.querySelector("#password").value = "";
  // }
};
