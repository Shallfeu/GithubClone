export function getQueryParams(params: OptionalRecord<string, string | number>) {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, typeof value === 'string' ? value : String(value));
        }
    });

    return `?${searchParams.toString()}`;
}

/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */
export function addQueryParams(params: OptionalRecord<string, string | number>) {
    window.history.replaceState(null, '', getQueryParams(params));
}
