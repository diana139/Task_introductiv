"use client";
import React, { useState, useEffect } from 'react';
import styles from './Casandra.module.css';

const poze = [
    {
        id: 1,
        src: '/images/CasandraIrimia.jpg',
        descriere: 'Casandra Irimia explorând natura în căutarea inspirației.',
    },
];

export default function IrimiaPage() {
    const [likes, setLikes] = useState<number[]>([]);
    const [dislikes, setDislikes] = useState<number[]>([]);

    useEffect(() => {
        const storedLikes = localStorage.getItem('irimiaLikes');
        const storedDislikes = localStorage.getItem('irimiaDislikes');
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
            localStorage.setItem('irimiaLikes', JSON.stringify(likes));
        }
        if (dislikes.length > 0) {
            localStorage.setItem('irimiaDislikes', JSON.stringify(dislikes));
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
            <h1 className={styles.header}>Profil Mentor - Casandra Irimia</h1>
            <p className={styles.description}>
                Ziua, mă plimb prin lume, explorând locuri noi și găsind inspirație în fiecare colț al naturii. 
                Noaptea, mă întorc în fața ecranului și construiesc site-uri care reflectă aceleași vibrații – simple, dar pline de viață. 
                Călătoriile îmi dau idei pentru design, iar aerul curat mă ajută să rezolv bug-uri ca un explorator în fața unui nou teritoriu. 
                Viața e ca un proiect web – cu cât îți împărtășești experiențele, cu atât devine mai frumoasă.
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