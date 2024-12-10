/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "max-layout": "min(100%, 90rem)"
            },
            fontFamily: {
                patrickHand: ["Patrick Hand", "sans-serif"]
            }
        }
    },
    plugins: []
};
