import React, { Component } from 'react';
import './Accordion.css';

class Accordion extends Component {
  render() {
    return (
<div>
<h2>Accordion</h2>

<button class="accordion">Section 1</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>


</div>
    );
  }
}

export default Accordion;
