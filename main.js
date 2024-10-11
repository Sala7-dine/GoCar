document.getElementById('sortPrice').addEventListener('click', function () {

    const cardContainer = document.getElementById('cardContainer') 

    const cards = Array.from(cardContainer.getElementsByClassName('column'));


    cards.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').textContent);
        const priceB = parseFloat(b.querySelector('.price').textContent);
      return priceA - priceB;
    });

    cardContainer.innerHTML = '';

    cards.forEach(card => cardContainer.appendChild(card));
  });