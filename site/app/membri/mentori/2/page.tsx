"use client";
import React, { useState, useEffect } from 'react';
import styles from './Motricala.module.css';

const poze = [
    {
        id: 1,
        src: '/images/MotricalaAlin.jpg',
        descriere: 'Despre acesta nu se știu multe, preferând să aibe o viață secretoasă.',
    },
    {
        id: 2,
        src: '/images/angular.jpg',
        descriere: '',
    },
];

export default function MotricalaPage() {
    const [likes, setLikes] = useState<number[]>([]);
    const [dislikes, setDislikes] = useState<number[]>([]);
    const [index, setIndex]= useState(0);

    useEffect(() => {
        const storedLikes = localStorage.getItem('motricalaikes');
        const storedDislikes = localStorage.getItem('motricalaDislikes');
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
            localStorage.setItem('motricalaLikes', JSON.stringify(likes));
        }
        if (dislikes.length > 0) {
            localStorage.setItem('motricalaDislikes', JSON.stringify(dislikes));
        }
    }, [likes, dislikes]);
    useEffect(() => {
            const interval = setInterval(() => {
                setIndex((prev) => (prev + 1) % poze.length);
            }, 10000);
            return () => clearInterval(interval);
        }, []);

        const handleLike = () => {
            const newLikes = [...likes];
            newLikes[index] += 1;
            setLikes(newLikes);
        };
    
        const handleDislike = () => {
            const newDislikes = [...dislikes];
            newDislikes[index] += 1;
            setDislikes(newDislikes);
        };
    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % poze.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + poze.length) % poze.length);
    };

    const poza = poze[index];

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Profil Mentor - Motricala Gabi</h1>
            <p className={styles.description}>
            ========================

            </p>
            <div className={styles.slideshowWrapper}>
                <button onClick={prevSlide} className={`${styles.navButton} ${styles.leftButton}`}>◀</button>

                <div className={styles.card}>
                    <img src={poza.src} alt={`Poza ${poza.id}`} className={styles.image} />
                    <h2 className={styles.title}>Poza {poza.id}</h2>
                    <p className={styles.photoDescription}>{poza.descriere}</p>
                    <div className={styles.actions}>
                        <button onClick={handleLike} className={styles.likeButton}>
                            <img src="/images/like.png" alt="Like" className={styles.icon} />
                            <span>{likes[index]} Likes</span>
                        </button>
                        <button onClick={handleDislike} className={styles.dislikeButton}>
                            <img src="/images/dislike.png" alt="Dislike" className={styles.icon} />
                            <span>{dislikes[index]} Dislikes</span>
                        </button>
                    </div>
                </div>

                <button onClick={nextSlide} className={`${styles.navButton} ${styles.rightButton}`}>▶</button>
            </div>
        </div>
    );
}