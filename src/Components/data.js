import box_office from '../Images/BoxOffice.png'
import tic_tac_tac from '../Images/TicaTacToe.png'
import eats_app from '../Images/EatsApp.png'
import to_do_list from '../Images/ToDoList.png'
import {DiJavascript1} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {SiRedux} from 'react-icons/si'
import {DiHtml5} from 'react-icons/di'
import {DiSass} from 'react-icons/di'
import {DiStreamline} from 'react-icons/di'
import {SiTypescript} from 'react-icons/si'
import {DiPython} from 'react-icons/di'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {SiTailwindcss} from 'react-icons/si'
import {DiNodejsSmall} from 'react-icons/di'

export const projects = [
    {
      title: 'Box Office',
      description: 'React, React hooks, NodeJs, Styled-components',
      image: box_office,
      link: 'https://thiru02.github.io/Box-office-latest/#/',
    },
    {
      title: 'Tic Tac Toe',
      description: 'React, React hooks, SASS',
      image: tic_tac_tac,
      link: 'https://amazinggametictactoe.surge.sh/',
    },
    {
      title: 'Eats App',
      description: 'React, React hooks, TailwindCSS',
      image: eats_app,
      link: 'https://thiru02.github.io/Eats-app/',
    },
    {
      title: 'To Do List',
      description: 'React, React hooks, CSS',
      image: to_do_list,
      link: 'https://thiru02.github.io/To-Do-List/',
    },
  ];

  export const skills =[
    {name:'JavaScript',icon:DiJavascript1},
    {name:'React',icon:DiReact},
    {name:'Redux', icon:SiRedux},
    {name:'HTML/CSS',icon:DiHtml5},
    {name:'Sass',icon: DiSass},
    {name:'TailwindCSS',icon: SiTailwindcss},
    {name:'NodeJS',icon: DiNodejsSmall},
    {name:'SQL',icon:DiStreamline},
    {name:'TypeScript',icon:SiTypescript},
    {name:'Python',icon:DiPython}
  ]

  export const testimonials = [
    'dfd','dfd'
  ]

  export const social = [
    {name:'Github',
      link:'https://github.com/Thiru02',
      icon:AiFillGithub
    },
    {name:'Linkedin',
    link:'https://www.linkedin.com/in/thiruparan-balakrishnan',
    icon:AiFillLinkedin
  },
  {name:'Twitter',
  link:'https://twitter.com/thiruparan2',
  icon:AiOutlineTwitter
}
  ]