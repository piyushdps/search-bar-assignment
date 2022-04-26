export const SetCacheData = (key, value) => {
    let v = {
        items: value,
        date: Date.now()
    }
    v = JSON.stringify(v)
    localStorage.setItem(key, v)
}

export const searchCachedData = (key) => {
    let value = localStorage.getItem(key)
    if (value == null) return { value: null }
    value = JSON.parse(value)
    if (Math.floor((Date.now() - value.date) / 1000) > 60) {
        localStorage.clear();
        return { value: null }
    }
    return { value: value.items }
}

