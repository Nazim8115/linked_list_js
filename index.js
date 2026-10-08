class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// const head = new Node(1);
// const second = new Node(2);
// head.next = second;
// const third = new Node(3);
// second.next = third;

// let current = head;

// while(current !== null){
//     console.log(current.data);
//     current = current.next;
// }

class LinkedList{
    constructor(){
        this.head = null;
    }
    insert(data){
        const newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }
    insertAtBeginning(data){
        const newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    pop(){
        if(this.head === null){
            return null;
        }
        let current = this.head;
        while(current.next !== null){
            if(current.next.next === null){
                current.next = null;
                return;
            }
            current = current.next;
        }

        
    }
    print(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }

}

let list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);


// console.log("Linked List:",list.head.data);


list.print();
list.pop();
list.print(); // pop removes last inserted element from the list;


/**
    1. time complexity of insert is O(n) because we have to traverse the list to find the last node.
    2. time complexity of insertAtBeginning is O(1) because we are inserting at the beginning of the list.
    3. time complexity of print is O(n) because we have to traverse the list to print all the nodes.
    4. space complexity of the linked list is O(n) because we are storing n nodes in the list.
    5. linked list is a linear data structure that consists of a sequence of nodes, 
    where each node contains data and a reference to the next node in the sequence.
    6. linked list can be used to implement other data structures such as stacks, queues, and graphs.
    7. linked list can be used to implement dynamic memory allocation, where memory is allocated and deallocated as needed.
    8. linked list can be used to implement hash tables, where each bucket is a linked list of key-value pairs.
    9. linked list can be used to implement adjacency lists for graphs, where each vertex has a linked list of its neighbors.
    10. linked list can be used to implement polynomial arithmetic, where each term of the polynomial is a node in the list.
    11. array vs linked list:
        - array has a fixed size, while linked list can grow and shrink dynamically.
        - array has O(1) time complexity for accessing elements by index, while linked list has O(n) time complexity for accessing elements by index.
        - array has O(n) time complexity for inserting and deleting elements, while linked list has O(1) 
            time complexity for inserting and deleting elements at the beginning of the list.
        - array has better cache locality than linked list, which can lead to better performance in some cases.
 * 
 * 
 */
