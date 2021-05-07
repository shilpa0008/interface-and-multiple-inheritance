function resolvePrecept(interfaceName) {
    var interfaceName = interfaceName;
    return function curry(value) {
        /*      throw new Error(interfaceName + ' requires an implementation for ...');     */
        console.warn('%s requires an implementation for ...', interfaceName);
        return value;
    };
}

var iAbstractClass = function AbstractClass() {
    var defaultTo = resolvePrecept('iAbstractClass');

    this.datum1 = this.datum1 || defaultTo(new Number());
    this.datum2 = this.datum2 || defaultTo(new String());

    this.method1 = this.method1 || defaultTo(new Function('return new Boolean();'));
    this.method2 = this.method2 || defaultTo(new Function('return new Object();'));

};

var ConcreteImplementation = function ConcreteImplementation() {

    this.datum1 = 1;
    this.datum2 = 'str';

    this.method1 = function method1() {
        return true;
    };
    this.method2 = function method2() {
        return {};
    };

    
    iAbstractClass.apply(this);  
};