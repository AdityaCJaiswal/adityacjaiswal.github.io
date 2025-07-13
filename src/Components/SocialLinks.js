import React from 'react';

const SocialLinks = props => {
  return (
    <div className="social">
      
      <a
  id="github-link"
  href="https://github.com/AdityaCJaiswal"
  target="_blank"
  rel="noopener noreferrer"
  title="Link to GitHub Profile"
>
  <i className="fab fa-github" />
</a>

<a
  id="linkedin-link"
  href="https://www.linkedin.com/in/adityajaiswal1/"
  target="_blank"
  rel="noopener noreferrer"
  title="Link to LinkedIn Profile"
>
  <i className="fab fa-linkedin" />
</a>


<a
  id="email-link"
  href="mailto:adityajaiswal.codes@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  title="Send Email"
>
  <i className="fas fa-envelope" />
</a>

<a
  id="resume-link"
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  title="View Resume"
>
  <i className="fas fa-file-alt" />
</a>

<a
  id="portfolio-link"
  href="https://adityacjaiswal.github.io"
  target="_blank"
  rel="noopener noreferrer"
  title="Visit Personal Website"
>
  <i className="fas fa-globe" />
</a>

    </div>
  );
};

export default SocialLinks;