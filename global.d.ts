// global.d.ts
declare module "expo-router" {
    export type Route =
        | "/"
        | "/about";

    export type Stack = {
        Screen: React.ComponentType<{
            name: string;
            options?: {
                title?: string;
                headerShown?: boolean;
            };
        }>;
    };

    export function useRouter(): {
        push: (path: string) => void;
        replace: (path: string) => void;
        back: () => void;
    };

    export function useLocalSearchParams<T extends Record<string, string | string[]>>(): T;
}