---
id: 'prismy'
title: 'prismyland/prismy'
status: true
time: 2020
categories: ['Open Source Project Contributor']
description: 'A maintainer of prismy: Simple and fast type safe server library for now.sh v2 and API routes of next.js'
---

# Prismyland

<img src='https://github.com/prismyland/prismy/raw/master/resources/logo.svg' alt='prismy logo' style='width: 50%' />

Joined [prismyland](https://github.com/prismyland/) team and became a member of contributors. Currently heavily contribute to keep project type safe and compatible with updates in other dependencies.

[👉 View the project](https://github.com/prismyland/prismy)

## Concepts

* Asynchronously pick required values of a handler from context(which having HTTP Request obejct: IncomingMessage).
* Asynchronously execute the handler with the picked values.

## Features

* Very small (No Expressjs, the only deps are micro and tslib)
* Takes advantage of the asynchronous nature of Javascript with full support for async / await
* Simple and easy argument injection for handlers (Inpsired by Reselect)
  * Completely _TYPE-SAFE_
  * No more complicated classes / decorators, only simple functions
  * Highly testable (Request handlers can be tested without mocking request or sending actual http requests)
* Single pass (lambda) style composable middleware (Similar to Redux)