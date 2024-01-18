const CHECK_LATIN_ALPHABET =
    /(([^a-zA-Z0-9]+)([^-._!"`'#%&,:;<>=@{}~$()*+/\\?[]^|]\s\b)*)/g;
const CHECK_STRONG_PASSWORD = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,20})/g;
const CHECK_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export {
    CHECK_LATIN_ALPHABET,
    CHECK_STRONG_PASSWORD,
    CHECK_EMAIL
};