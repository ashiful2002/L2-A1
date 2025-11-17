# TypeScript Blog Post

## **১. TypeScript-এ Interface এবং Type এর মধ্যে পার্থক্য**

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
   - `type` দিয়ে আমরা alias (নামকরণ) তৈরি করি, কিন্তু এটি extend করার জন্য interface এর মতো সরাসরি ব্যবহার করা যায় না। তবে intersection `&` দিয়ে combine করা যায়।  
     ```ts
     type Person = {
       name: string;
       age: number;
     }

     type Employee = Person & {
       employeeId: number;
     }
     ```

2. **Merging**:
   - `interface` এর declaration merge করা যায়। একাধিক interface declare করলে TypeScript সেগুলোকে একত্র করে।  
   - `type` এর ক্ষেত্রে এটি সম্ভব নয়। একই নামের type declare করলে error হবে।

3. **Use Case**:
   - Interface সাধারণত **object structure** বা **class contracts**-এর জন্য বেশি ব্যবহৃত হয়।  
   - Type alias সাধারণত **union**, **tuple**, **primitive types** বা **complex combinations**-এর জন্য ব্যবহার করা হয়।  

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
// PersonKeys এর মান হবে: "name" | "age" | "email"
```

`keyof` মূলত generic function বা type-safe programming-এ খুব কাজে আসে:

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Rakib", age: 25, email: "rakib@example.com" };
const personName = getValue(person, "name"); // ঠিক আছে
// const wrongKey = getValue(person, "address"); // Error, কারণ "address" Person এর মধ্যে নেই
```

**উপসংহার:**  
`keyof` ব্যবহার করে আমরা object-এর key গুলোর মধ্যে type-safe ভাবে access করতে পারি এবং ভুল key use করলে TypeScript compile-time error দেখায়.