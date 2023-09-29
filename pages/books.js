import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


const booksData = [
    {
        t: "Fooled by Randomness:",
        d: "The Hidden Role of Chance in Life and in the Markets",
        a: "Nassim Nicholas Taleb"
        
    },
    {
        t: "A Thousand Brains:",
        d: "A New Theory of Intelligence",
        a: "Jeff Hawkins"
    },
    {
        t: "When Breath Becomes Air",
        d: "",
        a: "Paul Kalanithi"
    },
    {
        t: "Meditations",
        d: "",
        a: "Marcus Aurelius"
    },
    {
        t: "The Stranger",
        d: "",
        a: "Albert Camus"
    },
    {
        t: "The Trial and Death of Socrates",
        d: "",
        a: "Plato"
    },
    {
        t: "Tractatus Logico-Philosophicus",
        d: "",
        a: "Ludwig Wittgenstien"
    },
    {
        t: "Quiet:",
        d: "The Power of Introverts in a World That Can't Stop Talking",
        a: "Susan Cain"
    },
    {
        t: "The Cold Start Problem:",
        d: "How to Start and Scale Network Effects",
        a: "Andrew Chen"
    },
    {
        t: "The Fall",
        d: "",
        a: "Albert Camus"
    },
    {
        t: "Mindset:",
        d: "The New Psychology of Success",
        a: "Carol S. Dweck"
    },
    {
        t: "Thinking in Algorithms:",
        d: "How to Combine Computer Analysis and Human Creativity",
        a: "Albert Rutherford"
    },
    {
        t: "Think Again:",
        d: "The Power of Knowing What You Don't",
        a: "Adam M. Grant"
    },
    {
        t: "Algorithms to Live By:",
        d: "The Computer Science of Human Decisions",
        a: "Brian Christian & Tom Griffiths"
    },
    {
        t: "The Art of War",
        d: "",
        a: "Sun Tzu"
    },
    {
        t: "Ego Is The Enemy",
        d: "",
        a: "Ryan Holiday"
    },
    {
        t: "Thinking in Bets:",
        d: "Making Smarter Decisions When You Don't Have All the Facts",
        a: "Annie Duke"
    },
    {
        t: "David and Goliath:",
        d: "Underdogs, Misfits, and the Art of Battling Giants",
        a: "Malcolm Gladwell"
    },
    {
        t: "Ikigai:",
        d: "The Japanese Secret to a Long and Happy Life",
        a: "Hector Garcia"
    },
    {
        t: "Being Mortal:",
        d: "Medicine and What Matters in the End",
        a: "Atul Gawande"
    },
    {
        t: "The Alchemist",
        d: "",
        a: "Paulo Coelho"
    },
    {
        t: "Think Like a Monk:",
        d: "Train Your Mind for Peace and Purpose",
        a: "Jay Shetty"
    },
    {
        t: "Essentialism:",
        d: "The Disciplined Pursuit of Less",
        a: "Greg McKeown"
    },
    {
        t: "The Socrates Express:",
        d: "In Search of Life Lessons from Dead Philosophers",
        a: "Eric Weiner"
    },
    {
        t: "The 7 Habits of Highly Effective People:",
        d: "Powerful Lessons in Personal Change",
        a: "Stephen R. Covey"
    },
    {
        t: "The Almanack of Naval Ravikant:",
        d: "A Guide to Wealth and Happiness",
        a: "Eric Jorgenson"
    },
    {
        t: "Die with Zero:",
        d: "Getting All You Can from Your Money and Your Life",
        a: "Bill Perkins"
    },
    {
        t: "Thinking, Fast and Slow",
        d: "",
        a: "Daniel Kahneman"
    },
    {
        t: "Blink:",
        d: "The Power of Thinking Without Thinking",
        a: "Malcolm Gladwell"
    },
    {
        t: "Atomic Habits:",
        d: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        a: "James Clear"
    },
    {
        t: "Zero to One:",
        d: "Notes on Startups, or How to Build the Future",
        a: "Peter Thiel"
    },
    {
        t: "Never Split the Difference:",
        d: "Negotiating As If Your Life Depended On It",
        a: "Chris Voss"
    },
    {
        t: "Four Thousand Weeks:",
        d: "Time Management for Mortals",
        a: "Oliver Burkeman"
    },
    {
        t: "Talking to Strangers:",
        d: "What We Should Know About the People We Don't Know",
        a: "Malcolm Gladwell"
    },
    {
        t: "The Intelligent Investor",
        d: "",
        a: "Benjamin Graham"
    },
    {
        t: "The Black Swan:",
        d: "The Impact of the Highly Improbable",
        a: "Nassim Nicholas Taleb"
    },
    {
        t: "Language and Proofs in Algebra:",
        d: "An Introduction",
        a: "Faculty of Mathematics, UWaterloo"
    },
    {
        t: "Is Justified True Belief Knowledge?",
        d: "",
        a: "Edmund Gettier"
    },
    {
        t: "Mathematical Logic for Computer Science",
        d: "",
        a: "Lu Zhongwan"
    },
    {
        t: "MATH 136:",
        d: "Linear Algebra 1 for Honours Mathematics",
        a: "Faculty of Mathematics, UWaterloo"
    },
    {
        t: "Shoe Dog:",
        d: "A Memoir by the Creator of Nike",
        a: "Phil Knight"
    },
    {
        t: "Elon Musk:",
        d: "Tesla, SpaceX, and the Quest for a Fantastic Future",
        a: "Ashlee Vance"
    },
    {
        t: "Life After Google:",
        d: "The Fall of Big Data and the Rise of the Blockchain Economy",
        a: "George Gilder"
    },
    {
        t: "Make Your Bed:",
        d: "Little Things That Can Change Your Life...And Maybe the World",
        a: "William H. McRaven"
    },
    {
        t: "The Monk Who Sold His Ferrari:",
        d: "Fulfilling Your Dreams and Reaching Your Destiny",
        a: "Robin S. Sharma"
    },
    {
        t: "The Algebra of Happiness:",
        d: "Notes on the Pursuit of Success, Love, and Meaning",
        a: "Scott Galloway"
    },
    {
        t: "Burn Rate:",
        d: "Launching a Startup and Losing My Mind",
        a: "Andy Dunn"
    },
    {
        t: "Grit:",
        d: "The Power of Passion and Perseverance",
        a: "Angela Duckworth"
    },
    {
        t: "The Psychology of Money",
        d: "",
        a: "Morgan Housel"
    },
    {
        t: "Deep Work:",
        d: "Rules for Focused Success in a Distracted World",
        a: "Cal Newport"
    },
    {
        t: "Wanting:",
        d: "The Power of Mimetic Desire in Everyday Life",
        a: "Luke Bergis"
    },
    {
        t: "Chatter:",
        d: "The Voice in Our Head, Why It Matters, and How to Harness It",
        a: "Ethan Kross"
    },
    {
        t: "Steal Like an Artist:",
        d: "10 Things Nobody Told You About Being Creative",
        a: "Austin Kleon"
    },
    {
        t: "The Best Place to Work:",
        d: "The Art and Science of Creating an Extraordinary Workplace",
        a: "Ron Friedman"
    },
    {
        t: "Why We Sleep:",
        d: "Unlocking the Power of Sleep and Dreams",
        a: "Matthew Walker"
    },
    {
        t: "The Courage to Be Disliked:",
        d: "Free Yourself, Change Your Life, Achieve Real Happiness",
        a: "Ichiro Kishimi, Fumitake Koga"
    },
    {
        t: "The Four:",
        d: "The Hidden DNA of Amazon, Apple, Facebook, and Google",
        a: "Scott Galloway"
    },
    {
        t: "Outliers:",
        d: "The Story of Success",
        a: "Malcolm Gladwell"
    },
    {
        t: "1984",
        d: "",
        a: "George Orwell"
    },
    {
        t: "The Curious Incident of the Dog in the Night-Time",
        d: "",
        a: "Mark Haddon"
    },
    {
        t: "The Hate U Give",
        d: "",
        a: "Angie Thomas"
    },
    {
        t: "Things Fall Apart",
        d: "",
        a: "Chinua Achebe"
    },
    {
        t: "Lord of the Flies",
        d: "",
        a: "William Golding"
    },
    {
        t: "The Giver",
        d: "",
        a: "Lois Lowry"
    },
    
]

export default function Books() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="https://latex.now.sh/style.min.css" />
      </Head>

      <main className={styles.header}>
        <h2 className={styles.title}>Bookshelf</h2>
        <p className={styles['book-desc']}>A reader lives a thousand lives</p>

        <p className={styles.description}>Currently reading cognitive science, philosophy, epistemology, startups.
        Usually updating on Goodreads <Link href="https://www.goodreads.com/review/list/155376622?shelf=read"className={styles.customLink} target="_blank">
            @jaidenratti</Link> or Bookshelved <Link href="https://bookshelved.com/@jaiden"className={styles.customLink} target="_blank">@jaiden</Link>.</p>

        <hr></hr>

        <div className={styles.books}>
            {booksData.map((book,index) => (
                <div key={index} className={styles.description}>
                    <span className={styles['book-title']}>{book.t}</span>
                    <span className={styles['book-desc']}> {book.d}<br/></span>
                    <span className={styles['book-detail']}>by {book.a}</span>
                    </div>
            ))}
        </div>
      </main>

      <footer className={styles.footer}>
        
      <p className={styles.endquote}>The man who never reads lives only one ~ George R. R. Martin</p>
      </footer>
    </div>
  );
}
