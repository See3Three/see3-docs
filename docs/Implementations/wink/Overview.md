# Wink

::: danger

Wink has known bugs, and is incomplete.

:::

The purpose of Wink is to demonstrate how see3-js can be integrated into React Native mobile apps.

It depends on an instance of Mayor to fetch the required cryptographic keys.

We use `react-native-webview-bridge` to establish a web environment, which is required for our WebAssembly and WebWorkers to function. We're exploring more optimal implementations.

See the [codebase](https://github.com/see3-js/wink) for more information.