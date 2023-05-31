import React from 'react';
import { Typography, Link, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram ,faTwitter,faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#ccc9c4', p: 7 }}>
      <Typography variant="body2" align="center" >
       
       
        <br />
        <span style={{ marginRight: '80px'}}>
          <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" style={{height:'30px'}}/>
          </Link>
        </span>
        <span style={{ marginRight: '80px' }}>
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" style={{height:'30px'}} />
          </Link>
        </span>
        <span style={{ marginRight: '80px' }}>
          <Link href="https://twitter.com/i/flow/login/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" style={{height:'30px'}}/>
          </Link>
        </span>
        <span style={{ marginRight: '80px' }}>
          <Link href="https://github.com/topics/login/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" style={{height:'30px'}}/>
          </Link>
        </span>

      </Typography>
    </Box>
  );
};

export default Footer;
