/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "max-layout": "min(100%, 90rem)"
            },
            fontFamily: {
                "patrick-hand": ["Patrick Hand", "sans-serif"]
            }
        }
    },
    plugins: []
};
