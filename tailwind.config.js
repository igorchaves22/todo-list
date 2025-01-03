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
                },
                "fade-in": {
                    from: { opacity: "0" },
                    to: { opacity: "1" }
                },
                "back-in-down": {
                    "0%": {
                        transform: "translateY(-75rem) scale(0.7)",
                        opacity: "0.7"
                    },
                    "80%": {
                        transform: "translateY(0) scale(0.7)",
                        opacity: "0.7"
                    },
                    "100%": {
                        transform: "scale(1)",
                        opacity: "1"
                    }
                },
                "back-in-up": {
                    "0%": {
                        transform: "translateY(75rem) scale(0.7)",
                        opacity: "0.7"
                    },
                    "80%": {
                        transform: "translateY(0) scale(0.7)",
                        opacity: "0.7"
                    },
                    "100%": {
                        transform: "scale(1)",
                        opacity: "1"
                    }
                }
            },
            animation: {
                "render-task-card": "slide-in-left 0.25s ease-in forwards",
                "fade-in": "fade-in 0.5s ease-in",
                "back-in-down": "back-in-down 0.75s ease-in",
                "back-in-up": "back-in-up 0.75s ease-in"
            }
        }
    },
    plugins: []
};
