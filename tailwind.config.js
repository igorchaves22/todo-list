/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/components/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                "patrick-hand": ["Patrick Hand", "sans-serif"]
            },
            keyframes: {
                "slide-in-left": {
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
                "render-task-card": "slide-in-left 0.25s ease-in forwards"
            }
        }
    },
    plugins: []
};
