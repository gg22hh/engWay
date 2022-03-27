import React, {useState} from 'react'
import './Listening.css'
import { TaskInner } from './components/TaskInner/TaskInner';

export const Listening = () => {
	const [theme, setTheme] = useState(false)
	const [theme1, setTheme1] = useState(false)
	const [theme2, setTheme2] = useState(false)
	const [theme3, setTheme3] = useState(false)

  return (
      <div className="listening">
          <h1 className="listening__title">Page Listening</h1>
          <ol className="listening__tasks">
              <li onClick={() => setTheme(!theme)} className="tasks__item">
                  <h2>Name of the theme</h2>
                  {theme ? <TaskInner /> : null}
              </li>
              <li className="tasks__item">
                  <h2>Name of the theme</h2>
              </li>
              <li className="tasks__item">
                  <h2>Name of the theme</h2>
              </li>
              <li className="tasks__item">
                  <h2>Name of the theme</h2>
              </li>
          </ol>
      </div>
  );
}
