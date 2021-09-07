const API_URL = "https://api.punkapi.com/v2/beers"

const getBeers = (hasAbvFilter, hasClassicFilter, hasAcidityFilter, searchTerm) => {
    searchTerm = searchTerm ? `beer_name=${searchTerm}` : "";
    let abv = hasAbvFilter ? `abv_gt=6.0` : "";
    let classic = hasClassicFilter ? `brewed_before=01-2008` : "";
    return fetch(`${API_URL}?${searchTerm}&${abv}&${classic}`)
        .then((res) => res.json())
        .then((jsonResponse) => {
            return jsonResponse
        })
}

export default getBeers;