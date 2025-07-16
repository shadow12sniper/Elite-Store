import React, { createContext, useContext, useState, useEffect } from "react";

export interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  inStock: boolean;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addToFavorites: (product: FavoriteItem) => void;
  removeFromFavorites: (productId: number) => void;
  toggleFavorite: (product: FavoriteItem) => void;
  isFavorite: (productId: number) => boolean;
  getFavoriteCount: () => number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    // Load favorites from localStorage on mount
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        localStorage.removeItem("favorites");
      }
    }
  }, []);

  useEffect(() => {
    // Save favorites to localStorage whenever favorites change
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product: FavoriteItem) => {
    setFavorites((currentFavorites) => {
      const exists = currentFavorites.find((item) => item.id === product.id);
      if (!exists) {
        return [...currentFavorites, product];
      }
      return currentFavorites;
    });
  };

  const removeFromFavorites = (productId: number) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((item) => item.id !== productId),
    );
  };

  const toggleFavorite = (product: FavoriteItem) => {
    const exists = favorites.find((item) => item.id === product.id);
    if (exists) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const isFavorite = (productId: number) => {
    return favorites.some((item) => item.id === productId);
  };

  const getFavoriteCount = () => {
    return favorites.length;
  };

  const value: FavoritesContextType = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    getFavoriteCount,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
