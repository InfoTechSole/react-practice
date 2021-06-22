export const genres = [
    { _id: "3ar756aiue3e5f8jf751g9hx6mf", name: "Action" },
    { _id: "1e25db719dfkr7e3e5fv6w8m53f", name: "Comedy" },
    { _id: "9h3c7gfew4567jkn23fdv754dgh", name: "Thriller" }
];

export function getGenres() {
    return genres.filter(g => g);
}
