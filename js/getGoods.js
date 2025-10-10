const getGoods = function () {
  const links = document.querySelectorAll('.navigation-link');

  const getData = () => {
    fetch('https://intensive-nuxt-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => localStorage.setItem('data', JSON.stringify(data)));
  };

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      getData();
    });
  });
};

getGoods();
