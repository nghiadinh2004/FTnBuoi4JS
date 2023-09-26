function createDivs() {
    for (let i = 1; i <= 10; i++) {
      let div = document.createElement('div');
      if (i % 2 === 0) {
        div.innerHTML=  "Số chẵn";
        div.style.backgroundColor = 'red';
      } else {
        div.innerHTML="Số lẻ";
        div.style.backgroundColor = 'blue';
      }
      document.body.appendChild(div);
    }
  }