declare module 'properties'

declare module 'camelcase' {
    const toCamelcase: (...str: string[]) => string;
    export = toCamelcase;
}
