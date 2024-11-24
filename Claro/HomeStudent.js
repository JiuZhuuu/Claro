function changeInputType() {
    const dropdown = document.getElementById("searchType");
    const inputField = document.getElementById("searchInput");
    inputField.value = "";
    switch(dropdown.value) {
        case "course":
            inputField.type = "text";
            inputField.placeholder = "Search for a course...";
            break;
        case "word":
            inputField.type = "text";
            inputField.placeholder = "Enter a keyword...";
            break;
        case "date":
            inputField.type = "date";
            inputField.placeholder = "";
            break;
        default:
            inputField.type = "text";
            inputField.placeholder = "Select a search type";
    }
}