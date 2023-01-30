class List{
    constructor(){
        this.arr = [];
        this.size = this.arr.length;
        
    }
    
    add(element){
        this.arr.push(element);
        this.size++;
        this.arr.sort((a,b) => a - b);
    }
    
    remove(index){
        if(index < this.size && index >= 0){
          this.arr.slice(index, 1);
          this.size--;
           
        }else{
            throw new Error(`Invalid index!`);
        }

    }

    get(index){
        if(index < this.size && index >= 0){
        return this.arr[index];
    }else{
        throw new Error(`Invalid index!`);
    }
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

