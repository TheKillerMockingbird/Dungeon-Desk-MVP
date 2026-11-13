import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('dungeon-desk-favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('dungeon-desk-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (item) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.index === item.index && fav.type === item.type)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFavorite = (index, type) => {
    setFavorites((prev) =>
      prev.filter((fav) => !(fav.index === index && fav.type === type))
    );
  };

  const isFavorite = (index, type) => {
    return favorites.some((fav) => fav.index === index && fav.type === type);
  };

  const toggleFavorite = (item) => {
    if (isFavorite(item.index, item.type)) {
      removeFavorite(item.index, item.type);
    } else {
      addFavorite(item);
    }
  };

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}