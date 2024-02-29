const template = document.createElement("template");

template.innerHTML = `
    <nav>
      <header
        class="d-flex flex-wrap justify-content-center py-3 border-bottom mx-5"
      >
        <a
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          href="./index.html  "
        >
          <img alt="Logo" class="me-2" height="80px" src="./images/logo.png" />

          <div>
            <span class="fs-3 fw-light text-info-emphasis">Dreams2Code</span>
            <br />
            <span class="fw-light text-secondary-emphasis"
              ><em>Established 2024</em></span
            >
          </div>
        </a>
        <div>
          <ul class="nav nav-pills fs-5 my-auto justify-content-end">
            <li class="nav-item">
              <a class="nav-link text-info-emphasis" href="#">Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-info-emphasis" href="./meet-the-team.html"
                >Leadership</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-info-emphasis" href="#">Volunteer</a>
            </li>
          </ul>
        </div>
      </header>
    </nav>
`;

document.body.appendChild(template.content);
