import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaBehance } from 'react-icons/fa';
import { socialprofils } from '../../content_option';
import './style.css';

export const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target="_blank" rel="noreferrer">
              <FaGithub /> Github
            </a>
          </li>
        )}
        {socialprofils.behance && (
          <li>
            <a href={socialprofils.behance} target="_blank" rel="noreferrer">
              <FaBehance /> Behance
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
