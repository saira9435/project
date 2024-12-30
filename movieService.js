const SAMPLE_MOVIES = [
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology.',
    poster: './Assets/inception.jpg',
    genre: 'Sci-Fi'
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years.',
    poster: 'Assets/ShawshankRedemptionMoviePoster.jpg',
    genre: 'Drama'
  },
  {
    id: 3,
    title: 'The_Dark_Knight',
    description: 'Batman faces his greatest challenge against the Joker.',
    poster: 'Assets/The_Dark_Knight.jpg',
    genre: 'Action'
  },
  {
    id: 4,
    title: 'the matrix',
    description: 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
    poster: './Assets/the_matrix.jpg',
    genre: 'Sci-Fi'
  },
  {
    id: 5,
    title: 'parasite',
    description: 'A poor family schemes to become employed by a wealthy family and infiltrate their household.',
    poster: './Assets/parasite.jpg',
    genre: 'Thriller'
  },
  {
    id: 6,
    title: 'Dune',
    description: 'A noble family becomes embroiled in a battle for the control of the galaxy\'s most valuable asset.',
    poster: './Assets/dune.jpg',
    genre: 'Sci-Fi'
  }
];

export async function loadMovies() {
  return SAMPLE_MOVIES;
}

export function filterMovies(movies, searchTerm) {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
