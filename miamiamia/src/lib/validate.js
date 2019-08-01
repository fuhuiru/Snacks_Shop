export default is;

let is = {
    phone(str){
        let test = /^1([23]){10}$/;
        if(test.test(str)){
            return true;
        }else{
            return false;
        }
    }
};