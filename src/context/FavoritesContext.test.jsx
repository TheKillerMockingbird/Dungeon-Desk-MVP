import { render, screen, act } from '@testing-library/react';
import { FavoritesProvider, useFavorites } from './FavoritesContext';

function TestComponent() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div>
      <p data-testid="count">{favorites.length}</p>
      <button
        onClick={() =>
          toggleFavorite({ index: 'goblin', name: 'Goblin', type: 'monster' })
        }
      >
        Toggle Goblin
      </button>
      <p data-testid="is-fav">
        {isFavorite('goblin', 'monster') ? 'yes' : 'no'}
      </p>
    </div>
  );
}

describe('FavoritesContext', () => {
  it('starts with zero favorites and can toggle one', () => {
    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    );

    expect(screen.getByTestId('count')).toHaveTextContent('0');
    expect(screen.getByTestId('is-fav')).toHaveTextContent('no');

    act(() => {
      screen.getByText('Toggle Goblin').click();
    });

    expect(screen.getByTestId('count')).toHaveTextContent('1');
    expect(screen.getByTestId('is-fav')).toHaveTextContent('yes');
  });
});