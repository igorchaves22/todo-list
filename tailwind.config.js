/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "max-container": "min(100%, 90rem)"
            },
            fontFamily: {
                patrickHand: ["Patrick Hand", "sans-serif"]
            }
        }
    },
    plugins: []
};
