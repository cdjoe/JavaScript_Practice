/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let obj = {
        toBe(a){
            if(a === val){
                return true;
            }
            else{
                throw "Not Equal"
            }
        },
        notToBe(a){
            if(a !== val){
                return true;
            }
            else{
                throw "Equal";
            }
        }

    }
    return obj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
