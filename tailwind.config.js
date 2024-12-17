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
            },
            keyframes: {
                slideInLeft: {
                    from: {
                        transform: "translate3d(-100%, 0, 0)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translate3d(0, 0, 0)",
                        opacity: "1"
                    }
                }
            },
            animation: {
                slideInLeft: "slideInLeft 0.25s ease-in forwards"
            }
        }
    },
    plugins: []
};
