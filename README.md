# Odd One Out Solver

An Angular5 website that solves odd one out questions.

Here is an example of an odd one out question:
1. Apple
2. Pie
3. Peach
4. Banana

The odd one out is __'Pie'__, because it is not a fruit.

The website determines the odd one out by checking which items fall into the same categories. If n - 1 items fall into similar categories, then the item left out will be assumed to be the odd one out. The data used to determine the categories is retrieved from Wikipedia's API.

Please note the results are not always correct.

## Live Demo
https://www.oddoneoutsolver.com

## Getting Started
### Prerequisites

- NodeJS (https://nodejs.org/en/)
- AngularCLI (https://cli.angular.io/)

### Installing Dependencies

Inside the cloned repository, install dependencies using the npm command below

```
npm install
```

## Local Deployment

```
ng serve
```


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
