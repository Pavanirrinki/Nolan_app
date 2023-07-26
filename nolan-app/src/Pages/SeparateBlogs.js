import React from 'react';
import Separateblog1 from '../SeparateBlogs/Separateblog1';
import Separateblog2 from '../SeparateBlogs/Separateblog2';
import Separateblog3 from '../SeparateBlogs/Separateblog3';
import Separateblog4 from '../SeparateBlogs/Separateblog4';
import Separateblog5 from '../SeparateBlogs/Separateblog5';
import Separateblog6 from '../SeparateBlogs/Separateblog6';
import Separateblog7 from '../SeparateBlogs/Separateblog7';
import Separateblog8 from '../SeparateBlogs/Separateblog8';
import Separateblog9 from '../SeparateBlogs/Separateblog9';
import { useParams } from 'react-router-dom';

const SeparateBlogs = () => {
  const {id} = useParams()
  console.log(id)
  return(
    <div >
  
      {id == 1 && <Separateblog1 />}
      {id == 2 &&  <Separateblog2 />}
      {id == 3 && <Separateblog3 /> }
      {id == 4 && <Separateblog4 /> }
      {id == 5 && <Separateblog5 /> }
      {id == 6 && <Separateblog6 /> }
      {id == 7 &&  <Separateblog7 /> }
      {id == 8 &&  <Separateblog8 /> }
      {id == 9 &&  <Separateblog9 /> }

    </div>

  );
};

export default SeparateBlogs;
