class A {  
    multi() {
      console.log(`from A -> inside instance of A: ${this instanceof A}`);
    }
  }
  
  
  const B = (B) => class extends B {
    multi() {
      if (super.multi) super.multi(); 
      console.log(`from B -> inside instance of B: ${this instanceof B}`);
    }
  };
  
  
  const C = (C) => class extends C {
    multi() {
      if (super.multi) super.multi(); 
      console.log(`from C -> inside instance of C: ${this instanceof C}`);
    }
  };
  
  
  class D extends C(B(A)) {  
    multi() {
      super.multi();
      console.log(`from D -> inside instance of D: ${this instanceof D}`);
    }
  }
  
  
  class E extends C(A) {
    multi() {
      super.multi();
      console.log(`from E -> inside instance of E: ${this instanceof E}`);
    }
  }
  

  class F extends B(Object) {
    multi() {
      super.multi();
      console.log(`from F -> inside instance of F: ${this instanceof F}`);
    }
  }
  
  
  class G extends C(Object) {}
  
  const inst1 = new D(),
        inst2 = new E(),
        inst3 = new F(),
        inst4 = new G(),
        inst5 = new (B(Object)); 
  
  console.log(`Test D: extends A, B, C -> outside instance of D: ${inst1 instanceof D}`);
  inst1.multi();
  console.log('-');
  console.log(`Test E: extends A, C -> outside instance of E: ${inst2 instanceof E}`);
  inst2.multi();
  console.log('-');
  console.log(`Test F: extends B -> outside instance of F: ${inst3 instanceof F}`);
  inst3.multi();
  console.log('-');
  console.log(`Test G: wraper to use C alone with "new" decorator, pretty format -> outside instance of G: ${inst4 instanceof G}`);
  inst4.multi();
  console.log('-');
  console.log(`Test B alone, ugly format "new (B(Object))" -> outside instance of B: ${inst5 instanceof B}, this one fails`);
  inst5.multi();