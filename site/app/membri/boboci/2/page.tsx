"use client";
import React, { useState, useEffect } from 'react';
import styles from './Rosu.module.css';

const poze = [
    {
        id: 1,
        src: '/images/RosuDiana.jpg',
        descriere: 'Aceasta este prima poză a coordonatorului, surprinsă într-un moment de relaxare.',
    },
    {
        id: 2,
        src: '/images/RosuDianafun.jpg',
        descriere: 'Coordonatorul nostru verificând sistemul audio.',
    },
];

export default function RosuPage() {
    const [likes, setLikes] = useState<number[]>([]);
    const [dislikes, setDislikes] = useState<number[]>([]);

    useEffect(() => {
        const storedLikes = localStorage.getItem('rosuLikes');
        const storedDislikes = localStorage.getItem('rosuDislikes');
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
            localStorage.setItem('rosuLikes', JSON.stringify(likes));
        }
        if (dislikes.length > 0) {
            localStorage.setItem('rosuDislikes', JSON.stringify(dislikes));
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
            <h1 className={styles.header}>Profil Coordonator - Moisa Andrei</h1>
            <p className={styles.description}>
                TREBUIE MODIFICAT AICI :P
                Nechifor este coordonatorul echipei noastre, un lider dedicat și pasionat. Cu o experiență vastă în domeniu, 
                el inspiră echipa să atingă noi culmi. În timpul liber, îi place să exploreze natura, să citească și să participe 
                la evenimente sociale.
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