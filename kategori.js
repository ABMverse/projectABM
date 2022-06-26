let listKonser = document.getElementById("list-konser");

const getKonser = async () => {
  const url = "https://62b14289e460b79df0547013.mockapi.io/konser";

  const respons = await fetch(url);
  const result = await respons.json();

  result.forEach((konser) => {
    listKonser.innerHTML += `
        
    <div class="col-md-3 col-6 mb-3">
    <div class="card h-100 rounded-2 shadow-sm poductsCard">
      <div class="inner">
        <img src="${konser.gambar}" class="card-img-top"   width="200"
        height="270" alt="paket 1" />
      </div>
      <div class="card-body">
      <h5 class="card-title">${konser.konser}</h5>
      <p class="card-text" style="font-size: 15px">Rp ${konser.harga},-</p>
            <p style="font-size: 12px">Jadwal Konser ${konser.tanggal}</p>
            <p style="font-size: 12px">Location : ${konser.kota}</p>
        <a href="#" class="btn btn-primary bg-dark stretched-link btn-modal" data-bs-toggle="modal" data-bs-target="#detail-article" onclick="getDataModal(${konser.id})">Buy Ticket</a>
      </div>
    </div>
    </div>
    </div>
    `;
  });

  console.log(result);
};

getKonser();

const getDataModal = async (id) => {
  const url = "https://62b14289e460b79df0547013.mockapi.io/konser/" + id;

  const respons = await fetch(url);
  const result = await respons.json();
  console.log(id);
  console.log(result);

  let poster = document.getElementById("imgPoster");
  let konserDetail = document.getElementById("konserDetail");
  let harga = document.getElementById("harga");
  let kota = document.getElementById("kota");

  poster.src = result.gambar;
  konserDetail.innerText = result.konser;
  harga.innerText = result.harga;
  kota.innerText = result.kota;
};

const kuduLogin = () => {
  alert("Kamu harus login terlebih dahulu untuk membeli tiket");
  window.location.replace("./loginPage.html");
};

const selesai = () => {
  window.location.replace("./transaksi.html");
};
