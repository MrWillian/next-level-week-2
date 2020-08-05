import React from 'react';
import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  name: string;
  cost: number;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="Willian" />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
        <br/><br/>
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank" 
          rel="noopener noreferrer"
          onClick={createNewConnection} 
          href={`https://wa.me/${teacher.whatsapp}`} 
          type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
