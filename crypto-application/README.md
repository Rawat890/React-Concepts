But using just <Router> without providing it a required history prop. This component is a low-level API not meant for typical use.
You should use BrowserRouter instead of Router for most React apps.

What is react-router-dom?

react-router-dom is a library that allows you to handle routing in React apps — meaning you can display different components (or pages) based on the URL without reloading the page.

✅ It's the DOM-specific version of react-router — designed to work in web browsers.

🧠 Core Concepts (React Router v6+)
1. <BrowserRouter> (aka Router)

Wraps your whole app.

Manages the history API in the browser.

Enables dynamic route handling.

2. <Routes>

It replaces the older <Switch> from v5.

It renders the first child <Route> that matches the current URL.

3. <Route>

Defines a mapping between a URL path and a React component.
This means:
👉 If the URL is /about, render the <About /> component.

4. 4. <Link>

Replaces traditional <a href="..."> for navigation.

Prevents full-page reloads, allowing React to handle routing.