import 'react';
import classes from './alfavit.module.css';
import List from "../list/list.jsx";
import {useNavigate} from "react-router-dom";

const Alfavit = () => {

  const navigate = useNavigate();

  const alfsvit =[
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

const infoClick = (title) => {
  navigate(`/alfavit/${title.toLowerCase()}`);
}

  return (
    <div className={classes.content}>
      <List
      items={alfsvit}
      renderItem={(elem) => (
        <>
        <h2 onClick={() => infoClick(elem)}>{elem}</h2>
          <span>/</span>
        </>
      )}
      />
    </div>
  );
};

export default Alfavit;