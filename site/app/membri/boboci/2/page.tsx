"use client";
import React, { useState, useEffect } from 'react';
import styles from './Rosu.module.css';

const poze = [
    {
        id: 1,
        src: '/images/RosuDiana.jpg',
        descriere: '',
    },
    {
        id: 2,
        src: '/images/pisicadiana.jpg',
        descriere: 'Mimi',
    },
    {
        id: 3,
        src: '/images/dianafun.jpg',
        descriere: '',
    },
   
];

export default function RosuPage() {
    const [likes, setLikes] = useState<number[]>([]);
    const [dislikes, setDislikes] = useState<number[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % poze.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleLike = () => {
        const newLikes = [...likes];
        newLikes[currentIndex] += 1;
        setLikes(newLikes);
    };

    const handleDislike = () => {
        const newDislikes = [...dislikes];
        newDislikes[currentIndex] += 1;
        setDislikes(newDislikes);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % poze.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + poze.length) % poze.length);
    };

    const poza = poze[currentIndex];

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Profil Boboc - Rosu Diana</h1>
            <p className={styles.description}>
                Sunt o persoană calmă, dar și agitată în același timp
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
                            <span>{likes[currentIndex]} Likes</span>
                        </button>
                        <button onClick={handleDislike} className={styles.dislikeButton}>
                            <img src="/images/dislike.png" alt="Dislike" className={styles.icon} />
                            <span>{dislikes[currentIndex]} Dislikes</span>
                        </button>
                    </div>
                </div>

                <button onClick={nextSlide} className={`${styles.navButton} ${styles.rightButton}`}>▶</button>
            </div>
        </div>
    );
}
