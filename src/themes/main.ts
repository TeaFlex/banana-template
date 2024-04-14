import TailwindTheme from "primereact/passthrough/tailwind";
import { PrimeReactPTOptions } from "primereact/api";

const mainTheme: PrimeReactPTOptions = {
    // Applying Tailwind theme config by default.
    ...TailwindTheme,
    // Put any override style below...
};

export default mainTheme;