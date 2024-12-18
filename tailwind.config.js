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
                },
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" }
                },
                backInDown: {
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
                backInUp: {
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
                slideInLeft: "slideInLeft 0.25s ease-in forwards",
                fadeIn: "fadeIn 0.5s ease-in",
                backInDown: "backInDown 0.75s ease-in",
                backInUp: "backInUp 0.75s ease-in"
            }
        }
    },
    plugins: []
};
