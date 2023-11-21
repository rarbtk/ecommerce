import logo from "../public/logoat&t.png";
import "../public/styles/header.css";
import { BiSearch } from 'react-icons/bi';

export default function Header() {
    return (
  
    <header className="Header">
      <div className="logo">
      <img src={logo} alt="logo" />

      </div>


      <div className="texto">

      <div class="input-with-icon">
    <input type="search" placeholder="Search.." />
    <a href="" class="icon"> <BiSearch /></a>
    </div>

      <ul>
      <a href="">Inicio</a>
      <a href="">Categorias</a>
      <a href="">Ofertas</a>
      <a href="">Ayuda</a>
        </ul>
      </div>
      
    </header>
  
    );
  }

  
/*
 int main()
  {
  int num1,numB,numA,numC,cambio =0;
  num1 = 342;
  
  numB = (num1 % 100)/10;
  
  
  numA = num1 % 10;
  
  numC = num1 / 100;
  
  if(numA >= numB && numB >= numC ) {
      
   
     printf("a:%d b:%d c:%d \n",numA,numB,numC);
      
  }else if (numA >= numC && numC >= numB ){
    cambio = numB;
      numB = numC;
      numC = cambio;
      printf("opcion b -> a:%d b:%d c:%d",numA,numB,numC);
  }
  
  else if(numB >= numA && numA >= numC ) {
      cambio = numB;
      numB = numA;
      numA = cambio;
      
     printf("opcion c -> a:%d b:%d c:%d \n",numA,numB,numC);
      
  }else if (numB >= numC && numC >= numA ){
      cambio = numA;
      numA = numB;
      numB = numC;
      numC = cambio;
      
      printf("opcion d -> a:%d b:%d c:%d",numA,numB,numC);
  }
    return 0;
 
  }
  
  */