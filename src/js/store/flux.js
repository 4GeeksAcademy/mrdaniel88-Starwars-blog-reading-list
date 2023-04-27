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
					obj[element] = data
					setStore(obj)
				}
				catch (error) {
					console.error(error)
				}

			},
			fetchPeople: async (id) => {
				let baseUrl = `https://www.swapi.tech/api/people/${id}`
				try {
					let response = await fetch(baseUrl)
					if (!response.ok) return response.status
					let data = await response.json()
					let objPeople = {}
					objPeople[id] = data
					setStore(objPeople)
				}
				catch (error) {
					console.error(error)
				}
			},
			addFavorites: (id, element, name) => {
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
			}
		}
	};
};

export default getState;
