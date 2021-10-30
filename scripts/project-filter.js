var currentFilter = null;
var allProjects = [];
const filteredProjects = document.getElementById("filtered-projects");

function setFilter(button) {
    if (currentFilter != null) {
        currentFilter.classList.remove("current-tag");
    }
    currentFilter = button;
    currentFilter.classList.add("current-tag");

    console.log(currentFilter.innerHTML);

    for (project of allProjects) {
        var currentFilterPresent = false;

        // Check if each project has the selected tag
        for (tag of project.getElementsByClassName("invisible-tag")) {
            if (tag.innerHTML == currentFilter.innerHTML) {
                currentFilterPresent = true;
            }
        }

        // Show or hide project
        if (currentFilterPresent) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }

        setProjectMargins();
    }

    document.location.href = document.location.href.split("#")[0] + "#" + currentFilter.innerHTML.replace(/ /g, "%20");
}

function setProjectMargins() {
    var projectNumber = 0;
    for (project of allProjects) {
        if (project.style.display != "none") {
            projectNumber ++;
            if (projectNumber % 3 != 1) {
                project.style.marginLeft = "3.45%";
            } else {
                project.style.marginLeft = 0;
            }
        }
    }
}

function clearFilter() {
    if (currentFilter != null) {
        currentFilter.classList.remove("current-tag");
    }
    currentFilter = null;

    for (project of allProjects) {
        project.style.display = "block";
        project.style.marginLeft = "3.45%";
    }
    allProjects[0].style.marginLeft = 0;

    setProjectMargins();

    document.location.href = document.location.href.split("#")[0] + "#";
}

for (i = 0; i < filteredProjects.childNodes.length; i ++) {
    if (filteredProjects.childNodes[i].classList != null) {
        if (filteredProjects.childNodes[i].classList.contains("filtered-project")) {
            allProjects.push(filteredProjects.childNodes[i]);
        }
    }
}

setProjectMargins();

if (window.location.href.includes("#")) {
    var urlFilter = window.location.href.split("#")[1].replace(/%20/g, " ");

    for (tag of document.getElementById("filter-tags").childNodes) {
        if (tag.innerHTML == urlFilter) {
            setFilter(tag);
        }
    }
}
