import {ConfigEnv, defineConfig, loadEnv, UserConfig} from 'vite'
import path from 'path';
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import 'dotenv/config'
import {buildConfig} from "./config/build/buildConfig";

export default defineConfig((configEnv: ConfigEnv) => {
    const env = loadEnv(configEnv.mode, process.cwd()) as BuildEnv;

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode ?? 'development';

    const PORT = Number(process.env.PORT) ?? 3000;
    const apiUrl =  process.env.API_URL ?? 'http://localhost:8000';
    const apiKey = process.env.API_KEY ?? '';

    const isDev = mode === 'development';

    const config: UserConfig = buildConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        apiKey
    });

    return config;
});
