/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm = 60 and final = 90

Output your object to the console
*/

const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: ['Soccer', 'Watching Movies'],
    exam_scores: {
        midterm: 60,
        final: 90
    }
};

console.log(student);

/*
Print hobbies -> [ 'Soccer', 'Watching Movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print Soccer -> Soccer

Find and print average of exam scores -> 75
*/

console.log(student.hobbies);
console.log(student.exam_scores);
console.log(student.hobbies[0]);

console.log(`The average of the exam scores is ${(student.exam_scores.midterm + student.exam_scores.final) / 2}`);


/*
Create a book object
name is Amok
author's first name is Stefan
author's last name is Zweig
genre is Novella
*/

const book = {
    name: 'Amok',
    author: {
        fname: 'Stefan',
        lName: 'Zweig'
    },
    genre: 'Novella'
};



/*
Create an array of books that stores 3 books information
Stefan Zweig - Amok - Novella
Orhan Pamuk - My Name Is Red - Historical Novel
George Orwell - 1984 - Dystopian Literature
*/

const books = [
    {
        name: 'Amok',
        author: {
            fname: 'Stefan',
            lName: 'Zweig'
        },
        genre: 'Novella'
    },
    {
        name: 'My Name Is Red',
        author: {
            fname: 'Orhan',
            lName: 'Pamuk'
        },
        genre: 'Historical Novel'
    },
    {
        name: '1984',
        author: {
            fname: 'George',
            lName: 'Orwell'
        },
        genre: 'Dystopian Literature'
    }
];

console.log(books.length); // 3
console.log(books[1]); // { name: 'My Name Is Red', author: { fname: 'Orhan', lName: 'Pamuk' }, genre: 'Historical Novel' }
console.log(books[2].author.lName); // Orwell


// Count the books where Author first name has an 'a' -> 2
let count = 0;

for(const book of books) {
    if( book.author.fname.includes('a') ) count++;
}

console.log(`There are ${count} author/s that has a in their names`);