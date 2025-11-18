# TypeScript Blog Post

## 1. TypeScript-এ Interface এবং Type এর মধ্যে পার্থক্য। 

TypeScript-এ আমরা প্রায়ই `interface` এবং `type` ব্যবহার করি, কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে:

1. **Declaration & Extension**:
   - `interface` দিয়ে আমরা নতুন `interface` তৈরি করতে পারি এবং সহজে অন্য interface থেকে extend করতে পারি।  
     ```ts
     interface Person {
       name: string;
       age: number;
     }
     
     interface Employee extends Person {
       employeeId: number;
     }
     ```
   `type` দিয়ে আমরা alias তৈরি করি, কিন্তু এটি extend করার জন্য interface এর মতো সরাসরি ব্যবহার করা যায় না। তবে intersection `&` দিয়ে combine করা যায়।  
     ```ts
     type Person = {
       name: string;
       age: number;
     }

     type Employee = Person & {
       employeeId: number;
     }
     ```


   - `interface` এর declaration merge করা যায়। একাধিক interface declare করলে TypeScript সেগুলোকে একত্র করে।  
   - `type` এর ক্ষেত্রে এটি সম্ভব নয়। একই নামের type declare করলে error হবে।


।  

---

## **২. TypeScript-এ keyof Keyword এর ব্যবহার**

`keyof` হলো একটি special TypeScript keyword যা কোন object type-এর সব **key**-এর union type return করে।  

#### উদাহরণ:
```ts
type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonKeys = keyof Person;
```

`keyof` মূলত generic function বা type-safe programming-এ খুব কাজে আসে:

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Rakib", age: 25, email: "rakib@example.com" };
const personName = getValue(person, "name"); 

```
