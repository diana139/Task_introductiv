"use client";
import React, { useState, useEffect } from 'react';
import styles from './Moraru.module.css';

const poze = [
    {
        id: 1,
        src: '/images/MoraruAlexandru.jpg',
        descriere: 'Moraru Alexandru în timpul unei întâlniri de business.',
    },
    {
        id: 2,
        src: '/images/MoraruAlexandruGanditor.jpg',
        descriere: 'Moraru Alexandru gândindu-se la algoritmi NP.',
    },
    {
        id:3,
        src: '/images/MoraruAlexandruVis.jpg',
        descriere: '"Găsiți-vă un băiat care se uită așa la voi"  -un înțelept"',
    },
];

export default function MoraruPage() {
    const [likes, setLikes] = useState<number[]>([]);
    const [dislikes, setDislikes] = useState<number[]>([]);

    useEffect(() => {
        const storedLikes = localStorage.getItem('moraruLikes');
        const storedDislikes = localStorage.getItem('moraruDislikes');
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
            localStorage.setItem('moraruLikes', JSON.stringify(likes));
        }
        if (dislikes.length > 0) {
            localStorage.setItem('moraruDislikes', JSON.stringify(dislikes));
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
            <h1 className={styles.header}>Profil Mentor - Moraru Alexandru</h1>
            <p className={styles.description}>
                Moraru Alexandru este un mentor pasionat de React și dezvoltare web. Cu o experiență vastă în domeniu, 
                el își dedică timpul pentru a ghida și inspira noile generații de programatori. În timpul liber, îi place 
                să exploreze noi tehnologii și să participe la evenimente tech.
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