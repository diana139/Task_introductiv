"use client";
import React, { useState, useEffect } from 'react';
import styles from './Casandra.module.css';

const poze = [
    {
        id: 1,
        src: '/images/CasandraIrimia.jpg',
        descriere: 'say matcha :P',
    },
    {
        id: 2,
        src: '/images/Casandrafun.jpg',
        descriere: 'What happens in Vegas stays in Vegas',

    },
    {
        id: 3,
        src: '/images/casandrasare.jpg',
        descriere: 'Casandra sare',

    }
];

export default function IrimiaPage() {
    const [likes, setLikes] = useState<number[]>([]);
    const [dislikes, setDislikes] = useState<number[]>([]);
    const [index, setIndex]= useState(1);

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
            <h1 className={styles.header}>Profil Mentor - Casandra Irimia</h1>
            <p className={styles.description}>
                Ador să explorez fiecare colț al lumii si sunt deschisă la orice fel de schimbări care mă ajută să evoluez pe plan profesional cât și personal!
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