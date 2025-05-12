"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Mentori.module.css';

const membri = [
    { 
        id: 1, 
        nume: 'Moraru Alexandru', 
      //  descriere: 'Expert în React și în distracție, jonglez zilnic între componente funcționale și greutăți la sală. Îmi place să optimizez atât performanța aplicațiilor, cât și a genuflexiunilor. Cred cu tărie că un console.log() bun și o serie de biceps pot rezolva aproape orice. Între un bug și un set de flotări, aleg… ambele. Dacă e nevoie de cod curat sau de energie la un eveniment, sunt omul potrivit!',
        poza: '/images/MoraruAlexandru.jpg' 
    },
    { 
        id: 2, 
        nume: 'Motricală Alin', 
      //  descriere: 'Expert în Angular și în evitarea social media. Îi place să bea (responsabil, desigur), dar nu să-și facă profilele publice – pentru că preferă să rămână în control, nu în trending. Scrie cod pe structură strictă ziua, ridică paharul seara și ignoră cu succes orice cerere de follow necunoscut. Dacă nu-l găsești online, probabil e prin linia de comandă sau pe terasă cu un pahar în mână', 
        poza: '/images/MotricalaAlin.jpg' 
    },
{
        id: 3,
        nume: 'Irimia Casandra',
       // descriere: 'Ziua, mă plimb prin lume, explorând locuri noi și găsind inspirație în fiecare colț al naturii. Noaptea, mă întorc în fața ecranului și construiesc site-uri care reflectă aceleași vibrații – simple, dar pline de viață. Călătoriile îmi dau idei pentru design, iar aerul curat mă ajută să rezolv bug-uri ca un explorator în fața unui nou teritoriu. Viața e ca un proiect web – cu cât îți împărtășești experiențele, cu atât devine mai frumoasă.',
        poza: '/images/CasandraIrimia.jpg'
    },
    {
        id: 4,
        nume: 'Paval Mihnea',
      //  descriere: 'Web development e ca un joc în care fiecare linie de cod este o misiune, iar fiecare funcționalitate e o provocare de depășit. Mă implic cu energie în fiecare proiect, la fel cum mă implic într-o activitate sau o discuție interesantă cu prietenii. Fiecare site pe care îl construiesc este ca un nou nivel pe care îl explorez, iar tăria mea vine din dorința de a învăța și de a colabora. Îmi place să creez ceva util, dar și să mă distrez pe parcurs – pentru că, în fond, viața e un mix între muncă, joacă și… tărie de caracter!',
        poza: '/images/MihneaPaval.jpg'
    },
];

export default function MentoriPage() {
    const [likes, setLikes] = useState<number[]>([]);
    const [dislikes, setDislikes] = useState<number[]>([]);

    useEffect(() => {
        const storedLikes = localStorage.getItem('mentoriLikes');
        const storedDislikes = localStorage.getItem('mentoriDislikes');
        if (storedLikes) {
            setLikes(JSON.parse(storedLikes));
        } else {
            setLikes(membri.map(() => 0)); 
        }
        if (storedDislikes) {
            setDislikes(JSON.parse(storedDislikes));
        } else {
            setDislikes(membri.map(() => 0)); 
        }
    }, []);

    useEffect(() => {
        if (likes.length > 0) {
            localStorage.setItem('mentoriLikes', JSON.stringify(likes));
        }
        if (dislikes.length > 0) {
            localStorage.setItem('mentoriDislikes', JSON.stringify(dislikes));
        }
    }, [likes, dislikes]);

    const handleLike = (index: number) => {
        const newLikes = [...likes];
        newLikes[index] += 1;
        setLikes(newLikes);
    };

    const handleDislike = (index: number) => {
        const newDislikes = [...dislikes];
        newDislikes[index] += 1;
        setDislikes(newDislikes);
    };

    return (
        <div>
            <h1 className={styles.header}>Buturuga mică</h1>
            <div className={styles.cardContainer}>
                {membri.map((membru, index) => (
                    <div key={membru.id} className={styles.card}>
                        <Link href={`/membri/mentori/${membru.id}`}>
                            <img 
                                src={membru.poza} 
                                alt={membru.nume} 
                                className={styles.image} 
                            />
                        </Link>
                        <h2 className={styles.title}>{membru.nume}</h2>
                    
                        <div className="flex justify-between items-center -mt-80">
                            <div className="flex flex-col items-center">
                                <button onClick={() => handleLike(index)}>
                                    <img 
                                        src="/images/like.png" 
                                        alt="Like" 
                                        className="w-8 h-8 cursor-pointer"
                                    />
                                </button>
                                <span>{likes[index]} Likes</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <button onClick={() => handleDislike(index)}>
                                    <img 
                                        src="/images/dislike.png" 
                                        alt="Dislike" 
                                        className="w-8 h-8 cursor-pointer"
                                    />
                                </button>
                                <span>{dislikes[index]} Dislikes</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}