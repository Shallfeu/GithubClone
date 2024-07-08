import {BuildOptions} from './types/config';
import {UserConfig} from "vite";
import {buildPlugins} from "./buildPlugins";

export function buildConfig(options: BuildOptions): UserConfig {
    const {
        paths,
        mode,
        isDev,
        port,
        apiUrl,
        apiKey
    } = options;

    return {
        mode,
        server: {
            port,
            open: true
        },
        build: {
            outDir: paths.build
        },
        plugins: buildPlugins(options),
        define: {
            API_URL: JSON.stringify(apiUrl),
            API_KEY: JSON.stringify(apiKey)
        },
        resolve: {
            alias: {
                "@": "/src"
            },
            extensions: [
                '.js',
                '.json',
                '.jsx',
                '.mjs',
                '.ts',
                '.tsx',
            ],
        },
    };
}
