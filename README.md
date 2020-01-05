<!-- PROJECT LOGO -->
<br />
<p align="center">
<!--
  <a href="https://github.com/colinespinas/ward">
    <img src="https://raw.githubusercontent.com/colinespinas/ward/master/public/assets/images/logo.png" alt="Logo" width="120">
  </a>
  -->

  <h3 align="center">WARD-CLI</h3>

  <p align="center">
    A CLI tool for <a href="https://github.com/colinespinas/ward">Ward</a>
    <br />
    <br />
    <!--<a href="https://ColinEspinas.github.io/ward/public/">View Demo</a>
    ·-->
    <a href="https://github.com/colinespinas/ward-cli/issues">Report Bug</a>
    ·
    <a href="https://github.com/colinespinas/ward-cli/issues">Request Feature</a>
    <br />
    <br />
    <a href="https://github.com/colinespinas/ward-cli/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/colinespinas/ward-cli.svg?style=flat-square" alt="Contributors">
    </a>
    <a href="https://github.com/colinespinas/ward-cli/network/members">
      <img src="https://img.shields.io/github/forks/colinespinas/ward-cli.svg?style=flat-square" alt="Forks">
    </a>
    <a href="https://github.com/colinespinas/ward-cli/stargazers">
      <img src="https://img.shields.io/github/stars/colinespinas/ward-cli.svg?style=flat-square" alt="Stargazer">
    </a>
    <a href="https://github.com/colinespinas/ward-cli/issues">
      <img src="https://img.shields.io/github/issues/colinespinas/ward-cli.svg?style=flat-square" alt="Issues">
    </a>
    <a href="https://github.com/colinespinas/ward-cli/blob/master/LICENSE.md">
      <img src="https://img.shields.io/github/license/colinespinas/ward-cli.svg?style=flat-square" alt="License">
    </a>
    <a href="https://www.linkedin.com/in/colin-espinas-9739b8178/l">
      <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555" alt="Linkedin">
    </a>
    <br />
    <br />
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About](#about)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
<!-- * [Acknowledgements](#acknowledgements) -->



<!-- ABOUT THE PROJECT -->
## About
A CLI tool to create and serve [Ward](https://github.com/ColinEspinas/ward) projects.


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org)
* [npm](https://www.npmjs.com) or [Yarn](https://yarnpkg.com) (or any package manager)


### Installation

```sh
# npm
npm install [-g] ward-cli

# Yarn
yarn [global] add ward-cli
```


<!-- USAGE EXAMPLES -->
## Usage

### `new <name> [directory]`
The `new` command will create a project in the directory called `<name>` (or create a new directory if it does not exist).

You can also specify a `[directory]` to specify where to create this project.

```sh
#Exemple:
ward new MyWardProject Projects # Creates a project called "MyWardProject" in the "Projects" directory.
```


### `serve [directory]`

* **-P, --port** : Wish port to listen to. (Default: 8000)
* **-I, --ip** : Wish IP address to serve to. (Default: "127.0.0.1")

The `serve` command will serve the files of a specified `[directory]` (if not specified will serve the current working directory).

```sh
#Exemple:
ward serve --port 3000 # Serves the current working directory to the port 3000.
```

<!-- CONTRIBUTING -->
## Contributing

This project is developed by a somewhat beginner javascript developer, help is always welcome. Do not hesitate to contribute to the project.

1. Fork the Project
2. Create your Feature or Fix Branch (`git checkout -b feature/Feature` or `git checkout -b fix/Fix`)
3. Commit your Changes (`git commit -m 'Add some feature or fix'`)
4. Push to the Branch (`git push origin feature/Feature` or `git push origin fix/Fix`)
5. Open a Pull Request



<!-- LICENSE -->
## License

ward-cli is distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Colin Espinas - [Website](https://colinespinas.com) - contact@colinespinas.com

Project link: [https://github.com/ColinEspinas/ward-cli](https://github.com/ColinEspinas/ward-cli)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [commander.js](https://github.com/tj/commander.js/)
* [simple-git](https://github.com/steveukx/git-js)
* [ora](https://github.com/sindresorhus/ora)
* [chalk](https://github.com/chalk/chalk)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/colinespinas/ward-cli.svg?style=flat-square
[contributors-url]: https://github.com/colinespinas/ward-cli/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/colinespinas/ward-cli.svg?style=flat-square
[forks-url]: https://github.com/colinespinas/ward-cli/network/members
[stars-shield]: https://img.shields.io/github/stars/colinespinas/ward-cli.svg?style=flat-square
[stars-url]: https://github.com/colinespinas/ward-cli/stargazers
[issues-shield]: https://img.shields.io/github/issues/colinespinas/ward-cli.svg?style=flat-square
[issues-url]: https://github.com/colinespinas/ward-cli/issues
[license-shield]: https://img.shields.io/github/license/colinespinas/ward-cli.svg?style=flat-square
[license-url]: https://github.com/colinespinas/ward-cli/blob/master/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/colin-espinas-9739b8178/l
[product-screenshot]: https://i.imgur.com/o9rDolc.jpg