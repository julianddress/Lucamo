import { useEffect } from "react";

export function useRemoveToken() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const url = new URL(window.location.href);
            url.searchParams.delete("access_token");
            window.history.replaceState({}, document.title, url.toString());
        }
    }, []);
}
