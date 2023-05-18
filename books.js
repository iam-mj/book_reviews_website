window.onload = start;
function start() 
{
    const classics = document.getElementById("classics");
    const detective = document.getElementById("detective");
    const fantasy = document.getElementById("fantasy");
    const romance = document.getElementById("romance");
    const sf = document.getElementById("sf");

    //clasici
    const dubliners = "https://openlibrary.org/api/books?bibkeys=ISBN:9780140186475&jscmd=data&format=json";
    addBook(dubliners, "ISBN:9780140186475", 1);
    const hamlet = "https://openlibrary.org/api/books?bibkeys=ISBN:9782277300540&jscmd=data&format=json";
    addBook(hamlet, "ISBN:9782277300540", 1);
    const ageOfInnocence = "https://openlibrary.org/api/books?bibkeys=ISBN:9780307291684&jscmd=data&format=json";
    addBook(ageOfInnocence, "ISBN:9780307291684", 1);
    const senseSensibility = "https://openlibrary.org/api/books?bibkeys=ISBN:9780141439662&jscmd=data&format=json";
    addBook(senseSensibility, "ISBN:9780141439662", 1);
    const lighthouse = "https://openlibrary.org/api/books?bibkeys=ISBN:9780140274165&jscmd=data&format=json";
    addBook(lighthouse, "ISBN:9780140274165", 1);
    const twoCities = "https://openlibrary.org/api/books?bibkeys=ISBN:9781573353946&jscmd=data&format=json";
    addBook(twoCities, "ISBN:9781573353946", 1);
    const dorianGray = "https://openlibrary.org/api/books?bibkeys=ISBN:9789354402173&jscmd=data&format=json";
    addBook(dorianGray, "ISBN:9789354402173", 1);
    const wutheringHeights = "https://openlibrary.org/api/books?bibkeys=ISBN:9781615242498&jscmd=data&format=json";
    addBook(wutheringHeights, "ISBN:9781615242498", 1);
    const idiot = "https://openlibrary.org/api/books?bibkeys=ISBN:9781549868955&jscmd=data&format=json";
    addBook(idiot, "ISBN:9781549868955", 1);


    //detective
    const ABC = "https://openlibrary.org/api/books?bibkeys=ISBN:9780671414924&jscmd=data&format=json";
    addBook(ABC, "ISBN:9780671414924", 2);
    const redDragon = "https://openlibrary.org/api/books?bibkeys=ISBN:9780440206156&jscmd=data&format=json";
    addBook(redDragon, "ISBN:9780440206156", 2);
    const signFour = "https://openlibrary.org/api/books?bibkeys=ISBN:9780192823793&jscmd=data&format=json";
    addBook(signFour, "ISBN:9780192823793", 2);
    const mysteryImagination = "https://openlibrary.org/api/books?bibkeys=ISBN:9781849311366&jscmd=data&format=json";
    addBook(mysteryImagination, "ISBN:9781849311366", 2);


    //fantasy
    const coraline = "https://openlibrary.org/api/books?bibkeys=ISBN:9781442071537&jscmd=data&format=json";
    addBook(coraline, "ISBN:9781442071537", 3);
    const percyJackson = "https://openlibrary.org/api/books?bibkeys=ISBN:9780786838653&jscmd=data&format=json";
    addBook(percyJackson, "ISBN:9780786838653", 3);
    const goodOmens = "https://openlibrary.org/api/books?bibkeys=ISBN:9780062934918&jscmd=data&format=json";
    addBook(goodOmens, "ISBN:9780062934918", 3);
    const nameWind = "https://openlibrary.org/api/books?bibkeys=ISBN:9780756404741&jscmd=data&format=json";
    addBook(nameWind, "ISBN:9780756404741", 3);


    //romance
    const normalPeople = "https://openlibrary.org/api/books?bibkeys=ISBN:9781984822178&jscmd=data&format=json";
    addBook(normalPeople, "ISBN:9781984822178", 4);

    //sf
    const invisibleMan = "https://openlibrary.org/api/books?bibkeys=ISBN:9780893754150&jscmd=data&format=json";
    addBook(invisibleMan, "ISBN:9780893754150", 5);

    async function addBook(url, isbn, idx)
    {
        try
        {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);

            const cover = document.createElement("img");

            cover.src = data[isbn]["cover"]["large"];
            cover.style.height = "12rem";
            cover.style.width = "10rem";
            cover.style.margin = "0.5rem 1rem";
            
            switch(idx)
            {
                case 1:
                    {
                        classics.appendChild(cover);
                        break;
                    }
                case 2:
                    {
                        detective.appendChild(cover);
                        break;
                    }
                case 3:
                    {
                        fantasy.appendChild(cover);
                        break;
                    }
                case 4:
                    {
                        romance.appendChild(cover);
                        break;
                    }   
                case 5:
                    {
                        sf.appendChild(cover);
                        break;
                    }
            }
        } 
        catch(error)
        {
            console.log("A aparut o eroare pt " + isbn + "!");
        }
    }
}