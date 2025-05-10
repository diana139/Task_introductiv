"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Coordonator.module.css';

const membri = [
    { 
        id: 1, 
        nume: 'Nechifor Alexandru', 
        descriere: 'Expert în React și în distracție, jonglez zilnic între componente funcționale și greutăți la sală. Îmi place să optimizez atât performanța aplicațiilor, cât și a genuflexiunilor. Cred cu tărie că un console.log() bun și o serie de biceps pot rezolva aproape orice. Între un bug și un set de flotări, aleg… ambele. Dacă e nevoie de cod curat sau de energie la un eveniment, sunt omul potrivit!',
        poza: '/images/NechiforAlexandru.jpg' 
    },
   
];


export default function CoordonatorPage() {
    const [likes, setLikes] = useState<number[]>([]);
    const [dislikes, setDislikes] = useState<number[]>([]);

    useEffect(() => {
        const storedLikes = localStorage.getItem('coordonatorLikes');
        const storedDislikes = localStorage.getItem('coordonatorDislikes');
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
            localStorage.setItem('coordonatorLikes', JSON.stringify(likes));
        }
        if (dislikes.length > 0) {
            localStorage.setItem('coordonatorDislikes', JSON.stringify(dislikes));
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
            <h1 className={styles.header}>Coordonator</h1>
            <div className={styles.cardContainer}>
                {membri.map((membru, index) => (
                    <div key={membru.id} className={styles.card}>
                        <Link href={`/membri/coordonator/${membru.id}`}>
                            <img 
                                src={membru.poza} 
                                alt={membru.nume} 
                                className={styles.image} 
                            />
                        </Link>
                        <h2 className={styles.title}>{membru.nume}</h2>
                        <p className={styles.description}>{membru.descriere}</p>
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