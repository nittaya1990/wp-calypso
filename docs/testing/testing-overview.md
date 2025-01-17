# Testing Overview

Software testing helps protect code from incoming bugs and improves general quality of the functionalities exposed to the users. When you look at it from the developer's standpoint the first thing that comes to mind is unit testing. However it turns out tests come in many flavors.

For Calypso, we follow the general principles of the [Testing Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html). We aim to have tests of varying scope, such as small, low-level unit tests, and larger, high-level end-to-end tests. We also aim to have an inverse relationship between test scope and the number of tests. The larger the testing scope, the fewer tests we should need. For example, we should always have more unit tests for a feature than end-to-end tests.

All of this might feel confusing and overwhelming even for seasoned developers. That's why the short talk [What We Can Learn About Testing From The Wheel](https://www.youtube.com/watch?v=Da9wfQ0frGA) by _Kent C. Dodds_ from _Ignite Fluent 2016_ might help understand differences. The author uses a car metaphor to make it easier to distinguish some of the most popular types of testing.

The next paragraphs explain how all those different types of testing are used to keep Calypso healthy.

Curious about the new Playwright-based e2e framework? [Check out the e2e docs here](../../test/e2e/README.md).

## Server side tests

This test configuration contains unit tests that verify code located in `server` top level folder.

It supports automatic test discovery. We only need to put a test file into a `test` subfolder, next to the files we want to test.

Tests can be run in 3 different modes:

```bash
> # run the entire server suite
> yarn run test-server
> # run a configuration customized to work with continuous integration
> yarn run test-server:ci
> # run tests in watch mode, by default it executes tests for the modified files only
> yarn run test-client:watch
```

Those tests are executed on every push on continuous integration (we use TeamCity). This is why all individual tests need to be blazing fast. Please note that network connection is disabled for this configuration.

_Check also how to write [unit tests](unit-tests.md)._

## Client side tests

This test configuration contains unit and component tests that verify code located in `client` top level folder.

It supports automatic test discovery. We only need to put a test file into a `test` subfolder, next to the files we want to test.

Tests can be run in 3 different modes:

```bash
> # run the entire client suite
> yarn run test-client
> # run a configuration customized to work with continuous integration
> yarn run test-server:ci
> # run tests in watch mode, by default it executes tests for the modified files only
> yarn run test-client:watch
```

They are executed on every push on continuous integration (TeamCity). This is why all individual tests need to be blazing fast. Please note that network connection is disabled for this configuration.

Often your changes will affect other parts of the application, so it's a good idea to run all the unit tests locally before checking in.

_Check also how to write [unit tests](unit-tests.md) and [component tests](component-tests.md)._

## Integration tests

This test configuration contains integration tests that verify code located in `bin`, `client`, `server` and `test` top level folders. They should test how a group of components or a larger part of business logic works together.

It supports automatic test discovery. We only need to put a test file into a `integration` subfolder, next to the files we want to test.

Tests can be run in 2 different modes:

```bash
> # run the entire integration suite
> yarn run test-integration
> # run a configuration customized to work with continuous integration
> yarn run test-integration:ci
```

They run daily on continuous integration (TeamCity), because they can use network connection or memory intensive processing and therefore can have longer runtime.

## End-to-end tests

All e2e tests now live in the [test/e2e](https://github.com/Automattic/wp-calypso/blob/HEAD/test/e2e) directory. For details on how to write, run, and debug them, see the [e2e documentation](../../test/e2e/README.md).

## FAQ

### What tools and libraries are used?

We use [Jest](https://facebook.github.io/jest/) testing tool to execute all test configurations located in Calypso repository. It's highly recommended to use Jest's very flexible [API](https://facebook.github.io/jest/docs/en/api.html) together with [expect matchers](https://facebook.github.io/jest/docs/en/expect.html) and [mock functions](https://facebook.github.io/jest/docs/en/mock-function-api.html).

Historically we have been using [Mocha](https://mochajs.org/) with [Chai assertions](http://chaijs.com/) and [Sinon mocks](http://sinonjs.org/). We still support Chai and Sinon for backward compatibility reasons, but Jest equivalents should be used whenever new tests are added.

End-to-end tests use [Playwright](https://playwright.dev/docs/intro) to interact with the browser, and Jest to write and drive the testing scripts.

### How to run all tests?

Executing `yarn test` from the root folder will run all test suites.
Behind the scenes we maintain 3 test configuration. This is because each of them (`client`, `server`, and `integration`) has their own requirements.

### How to run a smaller subset of test files?

We have a yarn run script for each tests type: `yarn run test-client`, `yarn run test-server`, `yarn run test-integration`.
You can pass a filename, folder name or matching pattern to these scripts to narrow down number of executed tests.

Example for client:

```bash
> # run test suite for a specific test file
> yarn run test-client client/state/selectors/test/get-media.js
> # run test suites for all files in a specific folder
> yarn run test-server server/config
> # run test suites for all files matching pattern
> yarn run test-client client/*/domains
```

### How to run specified suite or test-case

The exclusivity feature allows you to run only the specified suite or test-case by appending `.only()` to the function.
It works with `describe` and `it` functions. More details in [Jest documentation](https://facebook.github.io/jest/docs/api.html).

Using `only` is a little bit dangerous, as you may end up committing the `only`, which would cause the test suite to only run your test on the build server. So be sure to look for stray only calls when reviewing a test. We have [eslint rules](https://github.com/jest-community/eslint-plugin-jest) that should catch them for you.

Example:

```js
describe.only( 'just run this suite', function () {
	test( 'should run these tests', function () {
		// your test
	} );

	test.only( 'should only run this one test', function () {
		// just run this test if the only is present
	} );
} );
```
