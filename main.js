const endDate = "14 October 2022 01:31 P M";

document.getElementById("end-date").innerHTML = endDate;

const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();

    const diff = (end - now) / 1000;

    
    if(diff < 0) return;

    // conversion into Days!:
    inputs[0].value = Math.floor(diff/ 3600/ 24);

    // conversion into hours:
    inputs[1].value = (Math.floor(diff/ 3600 % 24));

    // conversion into minutes:
    inputs[2].value = Math.floor(diff / 60) % 60;

    // conversion into seconds:
    inputs[3].value = Math.floor(diff) % 60;

}

// initial call
clock();

// event call
setInterval (
    () => {
        clock()
    },
    1000
);