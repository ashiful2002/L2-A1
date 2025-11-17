// problem 1
function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return value;
  }
}

// console.log(formatValue("hello"));
// console.log(formatValue(12));
// console.log(formatValue(true));

// problem 2

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return 0;
  }
}
// console.log(getLength("mukto"));
// console.log(getLength([3, 45, 6, 34, 35, 4]));

// Problem 3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person1 = new Person("ashiful islam", 23);
// console.log(person1.getDetails());

// problem -4
type ItemType = {
  title: string;
  rating: number;
};

function filterByRating(items: ItemType[]) {
  return items.filter((item) => item.rating >= 4);
}
const books = [
  { title: "Porinita", rating: 4.5 },
  { title: "Chokher bali", rating: 3.5 },
  { title: "Bindur chele", rating: 5.0 },
];

// console.log(filterByRating(books));

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUser(users: User[]) {
  return users.filter((user) => user.isActive);
}

const users = [
  { id: 11, name: "Ashiful", email: "ashiful@gmail.com", isActive: true },
  { id: 22, name: "Islam", email: "islam@gmail.com", isActive: false },
  { id: 33, name: "Mukto", email: "mukto@gmail.com", isActive: true },
];
// console.log(filterActiveUser(users));

interface Book {
  title: string;
  author: string;
  publishYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishYear}, Available: ${availability}`
  );
}

const myBook: Book = {
  title: "The alcemist",
  author: "paulo",
  publishYear: 2002,
  isAvailable: false,
};
// printBookDetails(myBook);

// problem - 7

function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]) {
  const combined: (number | string)[] = [];

  function addUniqueNumber(value: number | string) {
    let exist = false;
    for (let i = 0; i < combined.length; i++) {
      if (combined[i] === value) {
        exist = true;
        break;
      }
    }
    if (!exist) {
      combined.push(value);
    }
  }
  //   second
  for (let i = 0; i < arr1.length; i++) {
    addUniqueNumber(arr1[i]);
  }
  //   third
  for (let i = 0; i < arr2.length; i++) {
    addUniqueNumber(arr2[i]);
  }
  return combined;
}

const arr1 = [1, 3, 4, 5, 6];
const arr2 = [2, 3, 5, 1, 36];
// console.log(getUniqueValues(arr1, arr2));

// problem 8
type ProductType = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
function calculateTotalPrice(products: ProductType[]): number {
  return products.reduce((total, product) => {
    const productTotal = product.price * product.quantity;
    const discountAmount = product.discount
      ? (productTotal * product.discount) / 100
      : 0;
    return total + (productTotal - discountAmount);
  }, 0);
}

const products = [
  { name: "Pen", price: 10, quantity: 2 }, // 10*2 = 20
  { name: "Notebook", price: 25, quantity: 3, discount: 10 }, // 25*3=75, discount=7.5 => 67.5
  { name: "Bag", price: 50, quantity: 1, discount: 20 }, // 50*1=50, discount=10 => 40
];
console.log(calculateTotalPrice(products));
