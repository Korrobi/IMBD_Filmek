function evszamgomb()
{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd087f0cb37msh7df583155c50320p186971jsn4538cd12ebde',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

let keres = document.getElementById("beev").value
    console.log(keres)

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q='+keres, options)
	.then(x => x.json())
	.then(y => lementes(y))
	.catch(err => console.error(err));

    function lementes(adatok)
    {
        tomb = adatok
        //console.log(tomb)
        kiir()
    }

    function kiir()
    {
        //document.getElementById("tabla").innerHTML
        console.log(tomb)
        
        for (const elem of tomb.d) 
        {
            if (elem.y = keres)
            {
                let tr = document.createElement("tr")
                document.getElementById("tabla").appendChild(tr)
                let td1 = document.createElement("td")
                tr.appendChild(td1)
                td1.innerHTML= elem.l
                let td2 = document.createElement("td")
                tr.appendChild(td2)
                td2.innerHTML = elem.s

                
            }
        }

    }



    
}
