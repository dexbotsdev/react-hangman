import { default as useDarkMode } from "./use-theme-hook";
import { default as useWordsource } from "./use-word-source-hook";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export { useDarkMode, useWordsource };
