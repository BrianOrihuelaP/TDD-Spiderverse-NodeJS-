//en TDD primero creamos nuestra prueba como si nuestro codigo ya funcionara
//ejecutamos y estudiamos los errores de las pruebas
/* describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
      const resultOfSomething = 1 + 2
      expect(resultOfSomething).toBe(18);
      //aqui la prueba falla por que estamos sumanndo 1 + 2 = 3 y no 18
    });
  }) */
  const Spiderman = require("./../app/spiderman")

  describe("Suite de pruebas #2", () => {
    test('Case 1: Probando mi spiderverse', () => {
       //Escribimos el codigo que queremos usar tal cual
      const spidyMaguire = new Spiderman("Peter Parker",46,"Tobey Maguire",4,"Columbia Pictures")
    
      //Validamos que el codigo funcione de la manera esperada
      expect(spidyMaguire.name).toBe("Peter Parker");
      expect(spidyMaguire.age).toBe(46);
      expect(spidyMaguire.actor).toBe("Tobey Maguire");
      expect(spidyMaguire.studioFilm).toBe("Columbia Pictures");
      //1.- En el primer caso de error nos menciona que Spiderman no esta definido, asi que creamos la clase en /app
      //2.- En el segundo caso de error nos menciona que no esta definido name, entonces se debe de crear algun set 
      //en la clase que guarde el nombre
      //3.- Despues de crear el constructor con todos los parametros, deberia de pasar la prueba
        //expect(spidyMaguire.movies).toBe("4"); //En efecto va a fallar dado que es cadena y no numero
            //Para confiar mas en si el codigo funciona como deberia, hacemos que el test falle para ver 
            //el comportamiento del codigo

      //4.-Creamos otro objeto de la misma clase y validamos
      const spidyHolland = new Spiderman("Peter Parker",23,"Tom Holland","4","Marvel Studios & Columbia Pictures")
      expect(spidyHolland.actor).toBe("Tom Holland")
      expect(spidyHolland.movies).toBe(4) //ESTA PRUEBA NOS DA ERROR DADO QUE LA CLASE RECIBE UNA CADENA Y NO UN NUMERO
      // En conclusión nuestro codigo funciona de la manera deseada
    });
  })