# Plugma

> [!WARNING]
> This work is still in progress. Use at your own risk.

Plugma is a CLI to simplify creating Figma plugins.

### Requirements

- [Node.js](https://nodejs.org/en)
- [Figma desktop app](https://www.figma.com/downloads/)

## Get started

Start by creating a plugin from a template using the CLI:

```shell
npm create plugma@latest
```

Follow the on-screen instructions.

### Features

- #### Live Development Server

  By linking the plugin window to a development server it eliminates the need to rebuild the UI file repeatedly. This aids in debugging and streamlines the process.

- #### Browser Preview

  Since it utilises a development server, you can try out your plugin's UI on different browsers, including previewing how it looks in both Figma's dark and light themes.

- #### Consistent Folder Structure

  Plugma hides unnecessary boilerplate code so you can concentrate on the code required to develop your plugins.

### Plugin Folder Structure

Your plugin project will look something like this.

Depending on which framework you choose, the files might vary slightly, but the file structure will remain the same.

```
dist/
    main.js
    ui.html
    manifest.json
scr/
    main.ts
    ui.ts
    App.jsx
    styles.css
vite.config.ts
package.json
README.md
```

- `dist` The dist folder is where the outputted plugin code is built. When importing a plugin in Figma, select the `manifest.json` file from this folder.

- `src` All of the source files required for your plugin.

  - `main.ts` This file interacts with Figma's Plugin API
  - `ui.ts` This file mounts the UI
  - `App.jsx` This file contains your UI markup (mandatory for some frameworks)

- `vite.config.ts` Because Plugma uses Vite for bundling, it gives you access to all of Vite's plugins.

- `package.json` Contains the name of our plugin and Figma manifest details in the `figma-manifest` field.

### Configure

<!-- Plugma specific settings

```jsonc
// package.json
{
    "plugma": {
        "framework": "svelte"
    }
}
``` -->

#### Figma specific settings

Add Figma's manifest details to the field `figma-manifest` inside the `package.json` file.

```jsonc
// package.json
{
  //...

  "figma-manifest": {
    "main": "src/main.js",
    "ui": "src/ui.js"
  }
}
```

## Helpers

- ### Messaging

  - #### `on(event, callback)`

    **Parameters**

    - **`event`** { String } the name of the event
    - **`callback`** { Function }

  - #### `emit(event, callback)`

    **Parameters**

    - **`event`** { String } the name of the event
    - **`callback`** { Function } _Optional_ If provided, it will return the result from the event handler with the same event name.

- ### UI

  - #### `ui`

    Stores the state for the UI.

    **Example**

    ```js
    export function(ui) {
      ui = {
        width: 400,
        height: 600
      }

      ui.show(data)
    }
    ```
