const bootCSS = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">`;
const jqSRC = `<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>`;
const bootSRC = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>`;

const team = [];

function genTeamArray(emp) {
    team.push(emp)
};

function makeEmployeeCards(employees) {
    employees.forEach((emp) => {
        var cardEl = $("<div>")
        var cardBodyEl = $("<div>");
        var cardTitle = $("<h5>");
        var cardText = $("<p>");
        var cardList = $("<ul>");
        var listID = $("<li>");
        var listEmail = $("<li>");
        var listOffice = $("<li>");
        var listGit = $("<li>");
        var listSchool = $("<li>");
        cardEl.addClass("card col-4");
        cardBodyEl.addClass("card-body");
        cardTitle.addClass("card-title");
        cardText.addClass("card-text");
        cardList.addClass("list-group list-group-flush");
        listEmail.addClass("list-group-item");
        listOffice.addClass("list-group-item");
        listGi.addClass("list-group-item");
        listSchool.addClass("list-group-item");
        cardBodyEl.append(cardTitle, cardText);
        cardEl.append(cardBodyEl);
        cardEl.append(cardList);
        cardList.append(listID);
        cardList.append(listEmail);

        cardTitle.text(emp.name);
        cardText.text(emp.type);
        listID.text(emp.id);
        listEmail.text(emp.email);

        if (emp.type === "Manager") {
            listOffice.text(emp.officeNum)
            cardList.append(listOffice);
        } else if (emp.type === "Engineer") {
            listGit.text(emp.github);
            cardList.append(listGit);
        } else {
            listSchool.text(emp.school);
            cardList.append(listSchool);
        };
    });

    
};




module.exports = {genTeamArray}