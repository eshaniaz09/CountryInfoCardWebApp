
        // to request for the information of country Pakistan
        const container = document.querySelector('.container');
        const request = new XMLHttpRequest();
        request.open('GET' , 'https://restcountries.com/v3.1/name/pakistan')
        request.send();

        // / to get the response from the api
        request.addEventListener('load' , function(){
                const [data] = JSON.parse(this.responseText);
                console.log(data);
                // to access the properties of the dymonym and nativelanguage
                const demonym = data.demonyms?.eng?.f || 'N/A';
                const nativeLanguage = data.languages?.urd || 'N/A';
                const htmlData = `

                <div id="card">
            <article class="card">
                <div class="card-body">
                    <img src="${data.flags.png}" alt="" class="card-body-img" />
                    <h1 class="card-body-tittle">
                        ${data.name.common}<span></span>
                    </h1>
                    <p class="card-body-text"> capital : ${data.capital}</p>
                </div>
                <div class="card-footer">
                    <div class="card-footer-social">
                        <h3>${nativeLanguage}</h3>
                        <p>Native language</p>
                    </div>
                    <div class="card-footer-social">
                        <h3>${data.population}</h3>
                        <p>Population</p>
                    </div>
                    <div class="card-footer-social">
                        <h3>${demonym}</h3>
                        <p>Demonym</p>
                    </div>
                </div>
            </article>
           </div>
                `
                container.insertAdjacentHTML('afterbegin', htmlData);
        })
    