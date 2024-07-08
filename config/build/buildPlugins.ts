import { PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import {BuildOptions} from "./types/config";
import graphqlLoader from "vite-plugin-graphql-loader";

export function buildPlugins(options: BuildOptions): PluginOption[] {
    const plugins = [
        react({}),
        eslint({
            useEslintrc: true,
        }),
        graphqlLoader()
    ];

    return plugins;
};
