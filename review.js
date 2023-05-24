window.onload = start;
function start()
{
    const form = document.getElementById("myForm");
    form.addEventListener("submit", (e) => {

        e.preventDefault();

        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let review = document.getElementById("content").value;
        let stars = document.getElementById("stars").value;

        if(/^[A-Z](?:[a-z]*\s+[A-Z]\w*)*$/.test(title)) //if each word of the title is capitalized
        {
            let myBook = null;
            try
            {
                myBook = JSON.parse(localStorage.getItem(`${title}`)); 
                //we store the books after thier title - not ideal, would prefer title + author
            }
            catch(error)
            {
                myBook = null;
            }

            if(!myBook)
            {
                myBook = [[review, stars]];
                localStorage.setItem(`${title}`, JSON.stringify(myBook));
            }
            else {
                let newReview = [review, stars];
                myBook.push(newReview);
                localStorage.setItem(`${title}`, JSON.stringify(myBook));
            }

            //clear the form
            document.getElementById("title").value = "";
            document.getElementById("author").value = "";
            document.getElementById("content").value = "";
            document.getElementById("stars").value = "";
            document.getElementById("terms").checked = false;
        }
        else {
            alert("Please capitalise each word of the book's title!");
        }
    });
}