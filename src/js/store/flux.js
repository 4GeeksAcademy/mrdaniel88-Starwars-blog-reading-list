const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
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

			}
		}
	};
};

export default getState;
