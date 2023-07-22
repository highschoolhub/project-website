// Navbar to import into all pages
let prepend = document.title == "Highschool Hub" ? "pages/" : "";
let navbar = `
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="../index.html">Highschool Hub</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="${prepend}vision.html">Vision</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="${prepend}features.html">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="${prepend}postmortem.html">Postmortem</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="${prepend}team.html">Team</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

document.body.insertAdjacentHTML("afterbegin", navbar);
