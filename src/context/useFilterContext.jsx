import { createContext, useContext, useState, useMemo, useEffect } from "react";

const FilterContext = createContext(undefined);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (context == undefined) {
    throw new Error("useFilterContext must be used within an FilterProvider");
  }
  return context;
};

export const FilterProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState(new URLSearchParams(window.location.search));
  const { pathname } = window.location;

  const queryParams = {};
  for (const [key, value] of searchParams.entries()) {
    queryParams[key] = value;
  }

  const INIT_FILTER_STATE = {
    categories: queryParams.hasOwnProperty("categories") ? queryParams["categories"].split(",").map((id) => Number(id)) : [],
    restaurants: queryParams.hasOwnProperty("restaurants") ? queryParams["restaurants"].split(",").map((id) => Number(id)) : [],
    search: queryParams.hasOwnProperty("search") ? queryParams["search"] : undefined,
    minPrice: queryParams.hasOwnProperty("minPrice") ? Number(queryParams["minPrice"]) : undefined,
    maxPrice: queryParams.hasOwnProperty("maxPrice") ? Number(queryParams["maxPrice"]) : undefined,
    rating: queryParams.hasOwnProperty("rating") ? Number(queryParams["rating"]) : undefined,
    updateCategory: () => {},
    updateRestaurant: () => {},
    updateSearch: () => {},
    updateMinPrice: () => {},
    updateMaxPrice: () => {},
    updateRating: () => {},
  };

  const [state, setState] = useState(INIT_FILTER_STATE);

  const updateState = (changes) => setState({ ...state, ...changes });

  const updateCategory = (categoryId) => {
    const categories = state.categories;
    if (!categories.length || !categories.includes(categoryId)) {
      categories.push(categoryId);
      updateState({ categories });
    } else if (categories.includes(categoryId)) {
      updateState({ categories: categories.filter((id) => id !== categoryId) });
    }
  };

  const updateRestaurant = (restaurantId) => {
    const restaurants = state.restaurants;
    if (!restaurants.length || !restaurants.includes(restaurantId)) {
      restaurants.push(restaurantId);
      updateState({ restaurants });
    } else if (restaurants.includes(restaurantId)) {
      updateState({
        restaurants: restaurants.filter((id) => id !== restaurantId),
      });
    }
  };

  const updateSearch = (search) => updateState({ search });

  const updateMinPrice = (minPrice) => updateState({ minPrice });

  const updateMaxPrice = (maxPrice) => updateState({ maxPrice });

  const updateRating = (rating) => updateState({ rating });

  useEffect(() => {
    let query = "";
    if (!(!state.categories || !state.categories.length)) {
      query += `categories=${state.categories.join(",")}&`;
    }
    if (!(!state.restaurants || !state.restaurants.length)) {
      query += `restaurants=${state.restaurants.join(",")}&`;
    }
    if (state.minPrice) {
      query += `minPrice=${state.minPrice.toString()}&`;
    }
    if (state.maxPrice) {
      query += `maxPrice=${state.maxPrice.toString()}&`;
    }
    if (state.rating) {
      query += `rating=${state.rating.toString()}&`;
    }
    if (state.search && state.search.length !== 0) {
      query += `search=${state.search}&`;
    }
    if (query.length !== 0) {
      window.location.href = `${pathname}?${query}`;
    }
  }, [state, pathname]);

  return (
    <FilterContext.Provider
      value={useMemo(
        () => ({
          ...state,
          updateCategory,
          updateRestaurant,
          updateSearch,
          updateMinPrice,
          updateMaxPrice,
          updateRating,
        }),
        [state]
      )}
    >
      {children}
    </FilterContext.Provider>
  );
};
