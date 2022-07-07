import styles from './SideBar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src={
          'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        }
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/40610119?v=4" />
        <strong>Junior Marques</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar sue perfil
        </a>
      </footer>
    </aside>
  );
}
