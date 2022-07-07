import { Header } from './components/Header/Header';

import './global.css';

import styles from './App.module.css';
import { Post } from './components/Post';
import { SideBar } from './components/SideBar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/junioralcant.png',
      name: 'Junior Marques',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projetoque fiz no NLW Return, evento da Rocketseat. O nome doprojeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'github.com/junioralcant.png',
      },
    ],

    publishedAt: new Date('2022-07-05 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projetoque fiz no NLW Return, evento da Rocketseat. O nome doprojeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'github.com/diego3g.png' },
    ],

    publishedAt: new Date('2022-07-05 20:30:00'),
  },

  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projetoque fiz no NLW Return, evento da Rocketseat. O nome doprojeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'https://github.com/diego3g.png' },
    ],
    publishedAt: new Date('2022-07-05 21:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
