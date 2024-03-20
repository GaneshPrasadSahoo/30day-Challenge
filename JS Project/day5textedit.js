
let heading = document.querySelector("h2");
    let inp = document.querySelector("input");
    let copyBtn = document.getElementById("copyBtn");
    let para = document.querySelector("p");

    inp.addEventListener("input", function(){
        console.log(inp.value);
        para.innerText = inp.value;
    });

    function changeclr() {
        this.style.color = "pink";
    }

    heading.addEventListener("click", changeclr);

    copyBtn.addEventListener("click", function() {
        let input = document.getElementById("textInput");
        input.select();
        document.execCommand("copy");
        copyBtn.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function() {
            copyBtn.classList.remove("active");
        }, 2500);
    });
