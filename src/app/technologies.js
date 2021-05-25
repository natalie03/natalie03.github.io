import classNames from 'classnames';
import React, { useEffect, useState } from "react";

// TODO: add slugify, fix key
import { technologies } from './tecnhologies.json';
const Technologies = () => {
  return (
    <>
      <h1 className="page-title">Fluent in</h1>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <div key={index}>
            <h2>{tech.title}</h2>
            <ul>
            {tech.items.map((item, i) => (
              <li key={`${index}_${i}`}>{item}</li>
            ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Technologies