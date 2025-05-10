"use client";
import React, { useState, useEffect } from 'react';
import styles from './Mihnea.module.css';

const poze = [
    {
        id: 1,
        src: '/images/MihneaPaval.jpg',
        descriere: 'Mihnea Paval lucrând la un proiect interesant.',
    },
  
];

export default function PavalPage() {
    const [likes, setLikes] = useState<number[]>([]);
    const [dislikes, setDislikes] = useState<number[]>([]);

    useEffect(() => {
        const storedLikes = localStorage.getItem('pavalLikes');
        const storedDislikes = localStorage.getItem('pavalDislikes');
        if (storedLikes) {
            setLikes(JSON.parse(storedLikes));
        } else {
            setLikes(poze.map(() => 0));
        }
        if (storedDislikes) {
            setDislikes(JSON.parse(storedDislikes));
        } else {
            setDislikes(poze.map(() => 0));
        }
    }, []);

    useEffect(() => {
        if (likes.length > 0) {
            localStorage.setItem('pavalLikes', JSON.stringify(likes));
        }
        if (dislikes.length > 0) {
            localStorage.setItem('pavalDislikes', JSON.stringify(dislikes));
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
        <div className={styles.container}>
            <h1 className={styles.header}>Profil Mentor - Mihnea Paval</h1>
            <p className={styles.description}>
                Web development e ca un joc în care fiecare linie de cod este o misiune, iar fiecare funcționalitate e o provocare de depășit. 
                Mă implic cu energie în fiecare proiect, la fel cum mă implic într-o activitate sau o discuție interesantă cu prietenii. 
                Fiecare site pe care îl construiesc este ca un nou nivel pe care îl explorez, iar tăria mea vine din dorința de a învăța și de a colabora. 
                Îmi place să creez ceva util, dar și să mă distrez pe parcurs – pentru că, în fond, viața e un mix între muncă, joacă și… tărie de caracter!
            </p>
            <div className={styles.cardContainer}>
                {poze.map((poza, index) => (
                    <div key={poza.id} className={styles.card}>
                        <img src={poza.src} alt={`Poza ${poza.id}`} className={styles.image} />
                        <h2 className={styles.title}>Poza {poza.id}</h2>
                        <p className={styles.photoDescription}>{poza.descriere}</p>
                        <div className={styles.actions}>
                            <button onClick={() => handleLike(index)} className={styles.likeButton}>
                                <img 
                                    src="/images/like.png" 
                                    alt="Like" 
                                    className={styles.icon} 
                                />
                                <span>{likes[index]} Likes</span>
                            </button>
                            <button onClick={() => handleDislike(index)} className={styles.dislikeButton}>
                                <img 
                                    src="/images/dislike.png" 
                                    alt="Dislike" 
                                    className={styles.icon} 
                                />
                                <span>{dislikes[index]} Dislikes</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}