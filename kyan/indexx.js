const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;




const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .container {
                display: flex;
                flex-direction: row;
                row-gap: 350px;
                background-color: black;
                border: yellow solid 3px;
    
    
            }
    
            .item {
    
                padding: 30px;
                color: white;
                margin-left: 100px;
                font-size: 40px;
                transition: all 1s;
    
    
            }
    
            .con {
                display: grid;
                grid-template-columns: 300px 300px;
                column-gap: 30px;
                row-gap: 30px;
                justify-content: center;
                margin-top: 100px;
            }
    
            .grid {
                display: grid;
                grid-template-areas:
                    'mc '
                    'ele'
                    'nec '
                    'quant';
                column-gap: 30px;
                margin-top: 30px;
                background-color: black;
    
    
            }
    
            .itemi {
                border: red solid 3px;
                background-color: black;
                color: white;
    
    
    
    
            }
    
            #mechanics {
                grid-area: mc;
                display: block;
            }
    
            #ele {
                grid-area: ele;
            }
    
            #nec {
                grid-area: nec;
            }
    
            #quant {
                grid-area: quant;
            }
    
            .facts {
                display: flex;
                flex-direction: column;
                row-gap: 120px;
    
            }
    
            .f {
                background-color: cyan;
                margin: 30px 30px;
                transition-property: all;
                transition-duration: 2s;
    
            }
    
            .p {
                color: cyan;
            }
    
    
            .p:hover {
    
                font-size: 40px;
    
                display: block;
                color: white;
            }
    
            .f:hover {
    
                background-color: black;
            }
    
            .cont {
                background-color: red;
                padding-top: 30px;
                width: 200px;
                height: 200px;
                animation-name: ph;
                animation-duration: 5s;
                animation-iteration-count: 1;
                position: relative;
                margin-top: 30px;
                display: block;
    
            }
    
            .EQUATION {
                display: block;
                animation-name: kh;
                animation-duration: 5s;
                animation-iteration-count: 1;
                position: relative;
                color: white;
    
            }
    
    
            .con {
                display: flex;
                flex-direction: row;
    
                background-color: black;
            }
    
            #p1 {
                grid-area: p1;
    
            }
    
            #p2 {
                grid-area: p2;
            }
    
            #p3 {
                grid-area: p3;
            }
    
            #p4 {
                grid-area: p4;
                float: right;
    
    
            }
    
            .poic {
                width: 15rem;
            }
    
            .lead {
                background-color: black;
            }
    
            .ult {
                background-color: black;
            }
    
            a {
                text-decoration: none;
                color: white;
            }
    
            a:hover {
                color: blue;
    
            }
    
    
            .item:hover {
                transform: scale(1.5);
            }
    
            .h3 {
                color: white;
            }
    
            .h4 {
                color: rgb(94, 14, 14);
    
            }
    
            #form {
                border: black 3px solid;
                margin-top: 30px;
                background-color: rgb(223, 223, 141);
            }
    
            .input {
                border: black solid 2px;
                border-radius: 3px;
    
            }
    
            #heading {
                border: brown 3px solid;
                display: inline-block;
                width: max-content;
    
            }
    
            #heading2 {
                border: yellow solid 4px;
            }
            .formulas{
                border: white solid 3px;
    
            }
    
            .tr{
                color: white;
                transition-property: all;
                transition-duration: 1s;
              font-size: 40px;
            }
            .trr{
                color: red;
                transition-property: all;
            
                transition-duration: 1s;
                font-size: 30px
            }
            .tr:hover{
                color: red;
    
    
            }
            .trr:hover{
                color: white;
            }
            .equate{
                border: yellow solid 3px;
    
                background-color: red;
            }
    
        </style>
    </head>
    
    <body>
        <div class="
        ult">
            <div class="
        lead">
                <nav class="container">
                    <li class="item"> <a href="#">Physics</a></li>
                    <li class="item"> <a href="#">Maths</a></li>
                    <li class="item"> <a href="#">About</a></li>
    
                    <li class="item"> <a href="#">Contact</a></li>
                </nav>
                <div class="con">
                    <img id="p1" class="poic"
                        src="https://image.shutterstock.com/image-illustration/atomic-structure-scientific-breakthrough-modern-260nw-1140894395.jpg">
                    <img id="p2" class="poic"
                        src="https://image.shutterstock.com/image-vector/chalkboard-inscribed-scientific-formulas-calculations-260nw-583783498.jpg">
                    <img id="p3" class="poic"
                        src="https://static.scientificamerican.com/blogs/cache/file/FE946D19-DD8A-4F50-968B5E142460AFCE_source.jpg?w=590&h=800&F34CBDA2-EC01-40A3-93FC20A458CC0C05">
                    <img id="p4" class="poic"
                        src="http://4.bp.blogspot.com/-LBSUmvqzYNo/Uf_uJvSZnpI/AAAAAAAAAq0/HKBgfdlS05o/s1600/CERN-Higgs-Simulation.jpg">
                </div>
            </div>
            <div class="grid">
                <div id="mechanics" class="itemi">
                    <div>
                        <h1> <a href="#">MECHANICS</a></h1>
                    </div>
                    <h3 class="h3"> Its a field of physics dealing with the way objects move.<br>
                        Its will tell you the future of each ond every motion you see</h3>
                </div>
            </div>
    
    
    
    
    
    
            <div>
                <div id="ele" class="itemi">
                    <h1><a href="#">ELECTRODYNAMICS</a></h1>
                    <h3 class="h3"></h3> > Electromagnitism deals with everything that you can call "electric" and
                    "magnetic"<br>
                    It talks about the magnetic properties of a various particles as well as electric one. <br>
                    It explains the motion of light and other radiations </h3>
                </div>
            </div>
    
            <div>
                <div id="nec" class="itemi">
                    <h1><a href="#">NUCLEAR PHYSICS</a></h1>
                    <h3 class="h3"></h3>>It deals with the way center of an atom i.e. nucleas works.<br>
                    Nucleus can be explained through two models one being quantum mechanical while other being classical
                    </h3>
                </div>
            </div>
            <div>
                <div id="quant" class=itemi>
                    <h1><a href="#">Quantum Mechanics</a></h1>
                    <h3 class="h3"></h3>>Quantum Mechanics which deals with how subAtomic particles behave. <br>
                    Look the behaviour of subatomic particles is very weird but quantum mechanics do its job<br>
                    of explaining it</h3>
                </div>
            </div>
        </div>
        <h1 id="heading"> LETS SEE IF YOU ARE ELIGIBLE</h1>
    
    
        <form action="" id="form">
            <h3 class="h4">DO YOU BELEIVE IN BIG BANG THEORY?</h3>
            <input type="text" placeholder=" Type answer here" class="input">
            <h3 class="h4"> WHAT DO YOU KNOW ABOUT QUANTUM ENTANGLEMENT?</h3>
            <input type="text" class="input">
            <h3 class="h4"> DOES GOD EXISTS?</h3>
            <input type="radio" name="radio" value="yes">yes
            <input type="radio" name="radio" value="no"> no
    
    
            <h3 class="h4"> WHICH IS MORE IMPORTANT PHYSICS OR CHEMISTRY?</h3>
            <input type="radio" name="radion" value="no">
            <h5>CHEMISTRY</h5>
            <input type="radio" name="radion" value="yes">
            <h5>PHYSICS</h5>
    
            <h3 class="h4">WHAT ARE YOUR OPINIONS ON INDIAN VEDIC SCIENCE?</h3>
            <input type="text" placeholder=" Type answer here" class="input">
    
        </form>
    
        <h1 id="heading2"> SOME MAJOR FACTS ABOUT UNIVERSE</h1>
    
        <div class="facts">
            <div class="f">
                <h1> FACT 1</h1>
                <div class="p">
                    <h5>BIG BANG</h5>
                    <p> Its Believed that the universe actually started with a process called big bang. Earlier our whole
                        universe was cofined to a region
                        as small as a point of size of proton. Its a place that physicists call a singularity. Its just a
                        place where space-time does not exist.
                        Then suddenly, it blasted off. But the contraversies about it are that ..think over it where was
                        that proton-sized structure actually placed??</p>
                </div>
    
            </div>
            <div class="f">
                <h1>FACT 2 </h1>
                <div class="p">
                    <h5>
                        BLACK HOLES
                    </h5>
                    <p>Black holes are really very mysterious things. Black holes can be said to be the end of stars. What
                        happens is , a star can be
                        said to be a balance between gravitational force and the nuclear eneergy. This nuclear energy is
                        mainly caused by the hydrogen
                        which is continuously fusing with other hydrogens to form helium. But this process produces a huge
                        amount of energy that balances
                        gravity. Hydrogen fuses to helium , helium to carbon and so on. this is even how all the elements
                        are created. Elements do this
                        to get stability. But as iron is the most stable element, it does not need any process to get
                        stability. Hence when this cycle reaches
                        iron, it stops and then , the gravity is same but there is no nuclear force. So there is no force to
                        balance gravity.</p>
                </div>
    
            </div>
            <div class="f">
                <h1>FACT 3</h1>
                <div class="p">
                    <h5>
                        Multiverse
                    </h5>
                    <p>
                        Multiverse is a concept excessively used in science fiction movies. This actually raise a question
                        on the no.
                        universes that actually exists. It says that there are several other universes which are running
                        along with us. But..
                        here comes a question that why do the scientist got an idea about this. The reason lies in quantum
                        mechanics
                        which states that electrons can be at two places at the same time. Another thing is that at the
                        start of the formation
                        of the universe was there in a very very small structure which behaved like an atom.
                    </p>
    
    
                
                </div>
    
                <div>
                <h1>  SOME MAJOR EQUATIONS OF PHYSICS </h1>
                </div>
    
    
                <div class="equate">
    
                    <div class="formulas">
                        <h2 class="tr"> Energy - mass </h2>
                        <h2 class = "trr">E = MC(SQUARED)</h2>
                    </div>
                
    
    
    
                    <div class="formulas">
                        <h2 class="tr"> FORCE-ACCELARATION </h2>
                        <h2 class = "trr">F = Ma</h2>
                        
                    
                    </div>
                    
    
    
    
                
    
    
                <div class="formulas">
                    <h2 class="tr"> TORQUE-ANGULAR ACCELARATION </h2>
                    <h2 class = "trr">T = IA[ notations are quite different..here T is torque and A is angular accelaration</h2>
    
                    
    
    
                </div>
    
    
    
                
    
    
    </body>
    
    </html>`);
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });