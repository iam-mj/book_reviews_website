window.onload = start;
function start() 
{
    loading();
    createBooks();
}

function createBooks() {
    let loaded = 0; //how many images have loaded
    let loadedTotal = 32; //how many are supposed to be loaded
    const genres = document.getElementsByClassName('book_container');
    const classics = genres[0];
    const detective = genres[1];
    const fantasy = genres[2];
    const romance = genres[3];
    const sf = genres[4];

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
    const johnathanStrage = "https://openlibrary.org/api/books?bibkeys=ISBN:1582344167&jscmd=data&format=json";
    addBook(johnathanStrage, "ISBN:1582344167", 3);
    const strangeDreamer = "https://openlibrary.org/api/books?bibkeys=ISBN:9781444788952&jscmd=data&format=json";
    addBook(strangeDreamer, "ISBN:9781444788952", 3);
    const tillWeHaveFaces = "https://openlibrary.org/api/books?bibkeys=ISBN:9780062565419&jscmd=data&format=json";
    addBook(tillWeHaveFaces, "ISBN:9780062565419", 3);
    const starlessSea = "https://openlibrary.org/api/books?bibkeys=ISBN:9781910701454&jscmd=data&format=json";
    addBook(starlessSea, "ISBN:9781910701454", 3);
    const howl = "https://openlibrary.org/api/books?bibkeys=ISBN:9780061478789&jscmd=data&format=json";
    addBook(howl, "ISBN:9780061478789", 3);


    //romance
    const normalPeople = "https://openlibrary.org/api/books?bibkeys=ISBN:9781984822178&jscmd=data&format=json";
    addBook(normalPeople, "ISBN:9781984822178", 4);
    const giveTheSun = "https://openlibrary.org/api/books?bibkeys=ISBN:9780803734968&jscmd=data&format=json";
    addBook(giveTheSun, "ISBN:9780803734968", 4);
    const turtles = "https://openlibrary.org/api/books?bibkeys=ISBN:9780241335437&jscmd=data&format=json";
    addBook(turtles, "ISBN:9780241335437", 4);
    const addieLaRue = "https://openlibrary.org/api/books?bibkeys=ISBN:9781785652509&jscmd=data&format=json";
    addBook(addieLaRue, "ISBN:9781785652509", 4);

    //sf
    const invisibleMan = "https://openlibrary.org/api/books?bibkeys=ISBN:9780893754150&jscmd=data&format=json";
    addBook(invisibleMan, "ISBN:9780893754150", 5);
    const windsTwelveQuarters = "https://openlibrary.org/api/books?bibkeys=ISBN:9781473205765&jscmd=data&format=json";
    addBook(windsTwelveQuarters, "ISBN:9781473205765", 5);
    const dune = "https://openlibrary.org/api/books?bibkeys=ISBN:0399128964&jscmd=data&format=json";
    addBook(dune, "ISBN:0399128964", 5);
    const smallAngryPlanet = "https://openlibrary.org/api/books?bibkeys=ISBN:9781473619814&jscmd=data&format=json";
    addBook(smallAngryPlanet, "ISBN:9781473619814", 5);
    const hitchhikerGuide = "https://openlibrary.org/api/books?bibkeys=ISBN:9781509860142&jscmd=data&format=json";
    addBook(hitchhikerGuide, "ISBN:9781509860142", 5);
    const solaris = "https://openlibrary.org/api/books?bibkeys=ISBN:0802755267&jscmd=data&format=json";
    addBook(solaris, "ISBN:0802755267", 5);

    function checkTotal() {
        if(loaded === loadedTotal)
            stopLoading();
    }

    async function addBook(url, isbn, idx)
    {
        try
        {
            const result = await fetch(url);
            const data = await result.json();

            const cover = document.createElement("img");

            //style
            cover.src = data[isbn]["cover"]["large"];
            cover.classList.add("book");
            cover.onload = function() {
                loaded++;
                checkTotal();
            }

            //js
            cover.addEventListener('click', (e) => {
                description(e, data[isbn])
            });
            
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
            loaded++;
            console.log("A aparut o eroare pt " + isbn + "!");
        }
    }
}

function description(e, data) {
    e.stopPropagation();

    //when we click on a cover we want a whole other window to appear
    let newWindow = document.createElement("article");
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let author = document.createElement("h4");
    let titles = document.createElement("section");
    let stars = document.createElement("h5");
    let numPages = document.createElement("p");
    let date = document.createElement("p");
    let review = document.createElement("section");
    let details = document.createElement("section");
    let exit = document.createElement("button");

    //Cover
    let sourceStyle = window.getComputedStyle(e.target);
    img.src = e.target.src;
    img.style.height = '90%';
    img.style.width = sourceStyle.width;
    img.style.margin = sourceStyle.margin;

    //Title & Authors
    title.innerText = data["title"].replace(/\b\w/g, match => match.toUpperCase()); //regex

    let authors = [];
    data["authors"].forEach(element => {
        authors.push(element["name"]);
    });

    author.innerText = authors.join(", ");

    titles.id = "titles";
    titles.appendChild(title);
    titles.appendChild(author);
    
    //Details
    if(data["number_of_pages"])
        numPages.innerText = "Number of pages: " + data["number_of_pages"];
    else numPages.innerText = "Number of pages: ?";
    let publishDate = new Date(Date.parse(data["publish_date"]));
    date.innerText = "Publish date: " + publishDate.toLocaleDateString();

    details.style.margin = sourceStyle.margin; 
    details.classList.add("blue");
    //vor fi pe aceeasi coloana ca si cover-ul => vrem sa aiba aceleasi margini
    details.appendChild(date);
    details.appendChild(numPages);
    

    //Reviews
    let rvw = null; //check for reviews
    try{
        rvw = JSON.parse(localStorage.getItem(`${title.innerText}`));
    }
    catch(err) {}

    let statistic = 0; //face media stelutelor

    if(rvw)
    {
        rvw.forEach(function(myReview) {
            let content = document.createElement("section");
            let stars = document.createElement("p");
            let p = document.createElement("p");

            p.innerText = myReview[0];
            stars.innerText = "Stars: " + myReview[1];

            statistic += parseInt(myReview[1]);

            content.appendChild(stars);
            content.appendChild(p);

            content.classList.add("rvw_content");
            review.appendChild(content);
        });

        statistic = (statistic / rvw.length).toFixed(2);
    }
    review.classList.add("reviews");


    //Stars
    stars.innerHTML = '<span class = "blue_only">' + "Stars: " + '</span>' + statistic;
    stars.classList.add("stars");

    //Exit Button
    exit.innerText = "X";
    exit.classList.add("exit_btn");
    exit.classList.add("btn");
    exit.addEventListener('click', () => {
        newWindow.remove();
    });

    img.style.gridArea = "cover";
    titles.style.gridArea = "titles";
    stars.style.gridArea = "stars";
    review.style.gridArea = "reviews";
    details.style.gridArea = "details";
    exit.style.gridAres = "button";

    newWindow.appendChild(img);
    newWindow.appendChild(titles);
    newWindow.appendChild(stars);
    newWindow.appendChild(review);
    newWindow.appendChild(details);
    newWindow.appendChild(exit);

    newWindow.classList.add("popUp");
    
    document.body.append(newWindow);
}

idInterval = []; //we store the interval ids
function loading() {
    nr = 0; // we count the circles
    setTimeout(addCircle, 1000);
    function addCircle() {
        nr += 1;
        const circle = document.createElement('div');
        circle.classList.add('circle');
        const section = document.getElementsByTagName('aside')[0];
        section.appendChild(circle);

        let angle = 0;
        const radius = 30;
        const centerX = section.offsetWidth / 2;
        const centerY = section.offsetHeight / 2;

        function moveCircle() {
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            circle.style.left = x + 'px';
            circle.style.top = y + 'px';
            angle += 0.03;
        }

        idInterval.push(setInterval(moveCircle, 10));
        if(nr <= 4)
            setTimeout(addCircle, 400);
    }
}

const h2 = document.getElementById('h2_books');
function stopLoading() {
    const wall = document.getElementsByTagName('aside')[0];
    idInterval.forEach(element => {clearInterval(element)}); //we clear all intervals
    wall.style.display = 'none';

    //we start the animation for the title
    const h2 = document.getElementById('h2_books');
    h2.classList.add('animated');
    startAnimation(h2);
}

function startAnimation(element) {
    document.addEventListener('keyup', (e) => {
            if(e.key.toLowerCase() === 't')
            {
                element.classList.remove('animated');
                void element.offsetWidth; //to trigger the animation again
                element.classList.add('animated');
            }
    });
}