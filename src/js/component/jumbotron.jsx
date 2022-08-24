import React from 'react';


const Jumbotron = () => {
 return (<div className="jumbotron bg-light">
 <h1 className="display-4">A Warm Welcom!</h1>
 <p className="lead">Integer convallis sollicitudin pretium. Donec tincidunt mi sed quam sodales, sit amet pretium massa convallis. Praesent placerat molestie odio eget.</p>

 <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
 <p className="lead">
   <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
 </p>
</div>);
}

//exportando el componente deseado
export default Jumbotron;