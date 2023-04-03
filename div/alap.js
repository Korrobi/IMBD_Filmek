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
    document.getElementById("keret").innerHTML=""

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
        var szam = 0
        var talal = ".találat: \n"
        var ertek = "Értékelés: "
        var evek = "Év: "

        if (tomb.d.length == 0) {
            document.getElementById("keret").innerHTML="NINCS TALÁLAT!"
        }
        else{
        for (const elem of tomb.d) 
        {
                szam ++
                let div = document.createElement("div")
                document.getElementById("keret").appendChild(div)
                div.style.border="2px black solid"
                div.style.margin="5px"
                div.style.textAlign="center"
                //div.setAttribute("class","col-sm-4")
                let img = document.createElement("img")
                div.appendChild(img)
                img.setAttribute("class","img-fluid")
                img.setAttribute("src",elem.i.imageUrl)
                //img.style.width="250px"
                let p = document.createElement("p")
                div.appendChild(p)
                p.innerHTML = szam+talal+elem.l
                let p2 = document.createElement("p")
                div.appendChild(p2)
                p2.innerHTML = elem.s
                let p3 = document.createElement("p")
                div.appendChild(p3)
                p3.innerHTML = ertek+elem.rank
                let p4 = document.createElement("p")
                div.appendChild(p4)
                if (typeof elem.y ==="undefined") {
                    p4.innerHTML= ""
                }
                else{
                p4.innerHTML = evek+elem.y
            }
            p.style.fontStyle="italic"
            p2.style.fontWeight="bold"
            p3.style.fontSize="30px"  
            p4.style.fontSize="25px"       
        }
        }
    }
}
