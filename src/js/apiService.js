

apiService = (search, pageNumber, key) => {
    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${pageNumber}&per_page=12&key=${key}`
    fetch (URL)
    .then(res => res.json())
}

export default apiService()