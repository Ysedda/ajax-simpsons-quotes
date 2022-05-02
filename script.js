function fetchSimpsonQuotes() {
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes`;
    
    axios.get(url)
      .then(function(response) {
        return response.data;
      })
      .then(function(simpson) {
        const simsponQuote = `
          <h2>Quote from : ${simpson[0].character}</h2>
          <p><strong>${simpson[0].quote}</strong></p>
          <img src="${simpson[0].image}" />
        `;  
        document.querySelector('#simpson-quote').innerHTML = simsponQuote;
      });
  }
  
  fetchSimpsonQuotes();