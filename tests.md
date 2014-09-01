# CSS

1. [x] No `/*` comments
    - [x] Need to account for inline
    - [x] Need to account for block
2. [ ] Space between property name and value
3. [ ] Use space between selector and `{`
    - [ ] check for \s{ or \S{
4. [x] Use `.scss` syntax
5. [x] Use `.less` syntax
6. [ ] Use hyphens when naming mixins, extends, classes, functions, and variables
7. [ ] Blank line above selector that has styles
8. [x] Use double quotation marks
9. [ ] Use only lowercase, including colors
10. [x] Don't have unit specification after zero
11. [x] Use a leading zero in decimal numbers `0.5` vs `.5`


TODO:
- Maybe throttle what is displayed in case you are running this on a huge project (maybe report only first occurence?)
- Should feed errors to a logger and say whether each test passed or failed then log at the end, only if not in test mode