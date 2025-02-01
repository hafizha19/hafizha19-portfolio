import aws from '../app/assets/svg/skills/aws.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import css from '../app/assets/svg/skills/css.svg';
import django from '../app/assets/svg/skills/django.svg';
import git from '../app/assets/svg/skills/git.svg';
import go from '../app/assets/svg/skills/go.svg';
import graphql from '../app/assets/svg/skills/graphql.svg';
import html from '../app/assets/svg/skills/html.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import matlab from '../app/assets/svg/skills/matlab.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import numpy from '../app/assets/svg/skills/numpy.svg';
import opencv from '../app/assets/svg/skills/opencv.svg';
import php from '../app/assets/svg/skills/php.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import magento from '../app/assets/svg/skills/magento.svg';
import fastapi from '../app/assets/svg/skills/fastapi.svg';
import shopware from '../app/assets/svg/skills/shopware.svg';
import springboot from '../app/assets/svg/skills/springboot.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'django':
      return django;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'fast api':
      return fastapi;
    case 'magento':
      return magento;
    case 'shopware':
      return shopware;
    case 'springboot':
      return springboot;
    default:
      break;
  }
}
