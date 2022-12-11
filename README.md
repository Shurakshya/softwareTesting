# softwareTesting

The repository is created for completing assignment of the course COMP.SE.200-2022-2023-1 Software Testing, Tampere University. The repository has github actions CI and Coveralls for running test cases in intergrated environment and reporting the test coverage. 

## Set Up

* Clone the repo
* Install node.js and npm (if not present), at least node.js 18 version
* `npm install` 
* `npm run test` for running tests 
* `npm run coverage` for running coverage
* `npm run report` for generating report
## Tests

The test for the relevant files as mentioned in test plan can be found in test directory. The test uses mocha and chai for unit test cases. The mochawesome for generating report. 

## Reports

Reports are generated after running the commands mentioned on Set Up

* mochawesome report can be seen under mochawesome-report/mochawesome.html
* coverage report can be seen under coverage/Icov-report/index.html
## The Coverall 

The coverall badge below is linked to the coverage report.

<a href='https://coveralls.io/github/Shurakshya/softwareTesting?branch=main'><img src='https://coveralls.io/repos/github/Shurakshya/softwareTesting/badge.svg?branch=main' alt='Coverage Status' /></a>

