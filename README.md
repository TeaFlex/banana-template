# Banana :banana:

React + TS + Vite.js + Primereact + tailwind template.

## What does it include?

this template uses the following technologies:
- [React](https://react.dev) (UI rendering library)
- [Vite.js](https://vitejs.dev) (Development server)
- [Primereact](https://primereact.org) (React UI suite)
- [Tailwind CSS](https://tailwindcss.com) (CSS framework)
- [Typescript](https://www.typescriptlang.org/) (JavaScript with syntax for types)

It also includes some additional utilities and libraries such as:
- [axios](https://axios-http.com/) (HTTP client)
- [@tanstack/react-query](https://tanstack.com/query/latest/docs/react/overview) (Data fetching library)
- [react-router v6](https://reactrouter.com) (Client routing library)
- [clsx](https://github.com/lukeed/clsx) (`className` builder utility)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) (Tailwind CSS classes merger)
- [dayjs](https://github.com/iamkun/dayjs) (Time manipulation library)
- [formik](https://formik.org) (React form builder)
- [yup](https://github.com/jquense/yup) (Data validation)
- [font-awesome icons v6](https://fontawesome.com/) (A lot of cool icons)
- [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) (Vite plugin for [svgr](https://github.com/gregberge/svgr) to transform SVGs into React components)

## What are the features?

It contains some custom utility code such as:

### Primereact theming with Tailwind
Primereact in `unstyled` mode can be styled with Tailwind via the Pass Through API at will. You can edit/create themes in the `themes` folder and import them in `providers/UIProvider.tsx`. If you want to create your own separated theme, copy and paste the `themes/main.ts` file, rename it and the object inside then import it in `providers/UIProvider` as such:

```tsx
// @/themes/awesome.ts
import { PrimeReactPTOptions } from "primereact/api";

const awesomeTheme: PrimeReactPTOptions = {
    // Put any override style here...
};

export default awesomeTheme;

// @/themes/index.ts
import mainTheme from "./main";
import awesomeTheme from "./awesome";

export default { 
    main: mainTheme,
    awesome: awesomeTheme, // We add our import here
};

// @/providers/UIProvider.tsx
export const UIProvider = (props: UIProviderProps) => {
    
    // ...

    const AppTheme = usePassThrough(
        Tailwind,
        themes.awesome, // We use our new theme here
        {
            mergeProps: true,
            mergeSections: true,
            classNameMergeFunction: twMerge,
        },
    );

    return (
        <PrimeReactProvider 
            value={{ 
                unstyled: true, 
                pt: AppTheme,
            }}
        >
            <Toast ref={_toast}/>
            <ConfirmDialog />
            <UIContext.Provider value={initialValue}>
                {props.children}
            </UIContext.Provider>
        </PrimeReactProvider>
    )
}


```

More info about Primereact theming with Tailwind [here](https://primereact.org/tailwind/).

### Pre-configured React Query client
A React query client has been pre-configured so that you can code right away. However, you can always change the values to suit you.

By default, the following values are set:

| Setting | Value |
|---|---|
| `refetchOnWindowFocus` | No |
| `retry` | 2 |
| `staleTime` | 10 min. |
| `gcTime` | 15 min. |

By passing a `meta` object in your queries hooks with an `error` or `success` message, you can display a Primereact toast automaticaly.

```tsx

const useMyQuery = () => {
    return useQuery({
        queryKey: ["my-awesome-query"],
        queryFn: fetchMyAwesomeData,
        meta: {
            success: {
                detail: "Your awesome data has been fetched with success!",
            },
            error: {
                detail: "It seems that your awesome data has been lost...",
            }
        }
    })
}

```

### Global Primereact toasts handling

As mentioned above, it is possible to handle toasts via queries settlement. But you can also display some from anywhere in your code with the `toast` util as such:

```ts
import { toast } from "@/utils/toast";

toast.show({ detail: "Is that a toast???" });
```

It follows the same API as the Primereact toasts with extra functions.

### Alias @ folder

In order to avoid writing boring and not very readable `../../../` when importing your local modules, `@/` can be used as an alias to the `src/` folder.

```ts
// Switch from this
import { myAwesomeFunction } from "../../../../utils/awesome";

// ...to that!
import { myAwesomeFunction } from "@/utils/awesome";
```

### Dynamic SVGs components

With this template, you no longer need to create manually components for your favorites SVGs icons or images.
Just import them in your code as such:

```jsx
import MyAwesomeSVGIcon from "@/path/to/svg/awesomeIcon.svg?react";

const SomeComponent = () => {
    return <>
        <MyAwesomeSvgIcon />
    </>;
}
```

For more information about svgr configuration, see [their docs](https://github.com/pd4d10/vite-plugin-svgr?tab=readme-ov-file#readme).

## How to use it?

### By Github template
Use it as a [Github template](https://github.com/new?template_name=banana-template&template_owner=TeaFlex).

### By Cloning it
Clone this repository with [degit](https://github.com/Rich-Harris/degit):
```sh
degit teaflex/banana-template my-project
```

Go to your project folder and install the dependencies with your favorite package manager:
```sh
cd my-project
pnpm i
```

Then you should be good to go!

## Why "Banana"?
Idk it sounds funny.