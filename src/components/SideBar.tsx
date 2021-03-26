import { useContext } from 'react';



import '../styles/global.scss';

import '../styles/sidebar.scss';
import '../styles/content.scss';
import { Button } from './Button';
import { DataContext } from '../DataContext';




export function SideBar() {

  const { genres, selectedGenreId, handleClickButton } = useContext(DataContext);







  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>

  )
}