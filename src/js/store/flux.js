const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchStarWars: async (element, page = 1, limit = 10) => {
				let baseUrl = `https://www.swapi.tech/api/${element}?page=${page}&limit=${limit}`

				try {
					let response = await fetch(baseUrl)
					if (!response.ok) return response.status
					let data = await response.json()
					let obj = {}
					obj[element] = data.results.map(item=>({
						...item,
						img:`https://starwars-visualguide.com/assets/img/${element=="people"?"characters":element}/${item.uid}.jpg`
					}))
					setStore(obj)
				}
				catch (error) {
					console.error(error)
				}

			},
			addFavorites: (id, name) => {
				let {favorites} = getStore()
				if(!favorites.some(item=>item.id==id)){
					// en caso de que NO exista, se agrega
					setStore({favorites:[...favorites,{id:id, name:name}]})
				}
				else {
					// en caso de que SI exista, se elimina
					let index=favorites.findIndex(item=>item.id==id)
					let newFavorites=[...favorites]
					newFavorites.splice(index,1)
					setStore({favorites:newFavorites})
				}
				// let newFavorites = [...store.favorites, {id: (id + element), name: name}]
				// setStore({favorites:newFavorites})
			},
			fetchElement: async (id) => {
				let baseUrl = `https://www.swapi.tech/api/planets/${id}`

				try {
					let response = await fetch(baseUrl)
					if (!response.ok) return response.status
					let data = await response.json()
					let obj = {}
					obj[id] = data.result.properties
					setStore(obj)
				}
				catch (error) {
					console.error(error)
				}
			}
		}
	};
};

export default getState;
