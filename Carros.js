const veiculos = [
  {
      "Marca": "Volkswagen",
      "Modelo": "Gol",
      "Placa": "ARW-0393",
      "Velocidade máxima": 200,
  },
  {
      "Marca": "Ferrari",
      "Modelo": "California",
      "Placa": "ABC-1235",
      "Velocidade máxima": 330,
  },
  {
      "Marca": "Fiat",
      "Modelo": "weekend",
      "Placa": "ASF-1254",
      "Velocidade máxima": 140,
  },
  {
      "Marca": "Chevrolet",
      "Modelo": "Camaro",
      "Placa": "ARE-3523",
      "Velocidade máxima": 250,
  },
  {
      "Marca": "Bulgatti",
      "Modelo": "chiron",
      "Placa": "ase-1334",
      "Velocidade máxima": 400,
  }
];

let Num_Veiculo = 0;

function resetar() {
  $('#c1').text('Exibir');
  $('#c1').removeClass('active');
  $('#c2').text('Exibir');
  $('#c2').removeClass('active');
  $('#c3').text('Exibir');
  $('#c3').removeClass('active');
  $('#c4').text('Exibir');
  $('#c4').removeClass('active');
  $('#c5').text('Exibir');
  $('#c5').removeClass('active');
}
function fncC1() {
  resetar();
  document.querySelector('#c1').innerHTML = `
      Marca: ${veiculos[0].Marca}
      <br>Modelo: ${veiculos[0].Modelo}
      <br>Placa: ${veiculos[0].Placa}
      <br>Velocidade máxima: ${veiculos[0]["Velocidade máxima"]}
  `;
  $('#c1').addClass('active');
}
function fncC2() {
  resetar();
  document.querySelector('#c2').innerHTML = `
      Marca: ${veiculos[1].Marca}
      <br>Modelo: ${veiculos[1].Modelo}
      <br>Placa: ${veiculos[1].Placa}
      <br>Velocidade máxima: ${veiculos[1]["Velocidade máxima"]}
      `;
  $('#c2').addClass('active');
}
function fncC3() {
  resetar();
  document.querySelector('#c3').innerHTML = `
      Marca: ${veiculos[2].Marca}
      <br>Modelo: ${veiculos[2].Modelo}
      <br>Placa: ${veiculos[2].Placa}
      <br>Velocidade máxima: ${veiculos[2]["Velocidade máxima"]}
  `;
  $('#c3').addClass('active');
}
function fncC4() {
  resetar();
  document.querySelector('#c4').innerHTML = `
      Marca: ${veiculos[3].Marca}
      <br>Modelo: ${veiculos[3].Modelo}
      <br>Placa: ${veiculos[3].Placa}
      <br>Velocidade máxima: ${veiculos[3]["Velocidade máxima"]}
  `;
  $('#c4').addClass('active');
}
function fncC5() {
  resetar();
  document.querySelector('#c5').innerHTML = `
      Marca: ${veiculos[4].Marca}
      <br>Modelo: ${veiculos[4].Modelo}
      <br>Placa: ${veiculos[4].Placa}
      <br>Velocidade máxima: ${veiculos[4]["Velocidade máxima"]}
  `;
  $('#c5').addClass('active');
}

for (let item of veiculos) {
  Num_Veiculo = Num_Veiculo += 1;

  document.querySelector('#car_info').innerHTML += `
  <tr>
    <th scope="row">${Num_Veiculo}</th>
    <td scope="col">${item.Marca}</td>
    <td scope="col">${item.Modelo}</td>
    <td scope="col">${item.Placa}</td>
    <td scope="col">${item["Velocidade máxima"]}</td>
  </tr>
  `;
}